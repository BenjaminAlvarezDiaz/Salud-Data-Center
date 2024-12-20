import { React, useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import SearchBox from '../components/SearchBox/SearchBox';
import { getOrders, putOrders } from '../redux/actions/order_actions';
import { getProducts } from '../redux/actions/product_actions';
import { getPatients } from '../redux/actions/patient_actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/Orders.css';

function Orders (){
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ orders, setOrders ] = useState([]);
    var order = { id: null };

    const [ products, setProducts ] = useState([]);
    var product = { id: null };

    const [ patients, setPatients ] = useState([]);
    var patient = { id: null };

    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };

    const dispatchOrders = async () => {
        try{
            const result = await dispatch(getOrders(order));
            setOrders(result);
        } catch (error) {
            console.error("Error al obtener los pedidos:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay pedidos para mostrar");
            }
        }
    }

    const dispatchProducts = async () => {
        try {
            const result = await dispatch(getProducts(product));
            setProducts(result.data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay productos para mostrar");
            }
        }
    }

    const dispatchPatients = async () => {
        try{
            const result = await dispatch(getPatients(patient));
            setPatients(result);
        } catch (error) {
            console.error("Error al obtener los clientes:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay clientes para mostrar");
            }
        }
    }

    useEffect(() => {
        dispatchOrders();
        dispatchProducts();
        dispatchPatients();
    }, []);

    return (
        <div className='orders-main-container'>
            <AppBar 
                content={<SearchBox placeHolder={"Buscar"}/>}
                contentRight={<div className='orders-icon-right'>
                    <span className='material-icons icon-app-bar'>notifications</span>
                </div>}
                iconRight={<span className='material-icons icon-app-bar'>store</span>}
            />
            <div className='orders-content'>
                <div className='orders-content-up'>
                    <div className='orders-content-see-items'>
                        <button className='orders-content-buttons'>
                            <span className='material-icons orders-buttons'>splitscreen</span>
                        </button>
                        <button className='orders-content-buttons'>
                            <span className='material-icons orders-buttons'>grid_view</span>
                        </button>
                    </div>
                    <SearchBox placeHolder={'Buscar'}/>
                    <div className='orders-content-delete'>
                        <button className='orders-content-delete-button'>
                            <span className='material-icons'>delete</span>
                        </button>
                    </div>
                    <div className='orders-content-filter'>
                        <button className='orders-content-filter-button'>
                            <span className='material-icons'>filter_alt</span>
                            Filter
                        </button>
                    </div>
                    <div className='orders-content-import-export'>
                        <button className='orders-content-import-export-button import'>
                            <span className='material-icons'>upload</span>
                            Importar
                        </button>
                        <button className='orders-content-import-export-button export'>
                            <span className='material-icons'>download</span>
                            Exportar
                        </button>
                    </div>
                </div>
                <div className='orders-content-down'>
                    <div className='orders-content-down-labels-items'>
                        <LabelsItems/>
                    </div>
                    <div className='orders-line'/>
                    <div className='orders-content-down-items'>
                        {orders.length > 0? 
                        (
                            orders.map((item, index) => {
                                
                                if(patients[index] && patients.filter(i => i.id == item.idCliente)){
                                    var customer = patients[index];
                                    //console.log(patients.filter(item => item.id == 5));
                                    //setData(searchArray.filter(item => item.toLowerCase().includes(filteredItems)));
                                }

                                if(products[index] && products.filter(i => i.id == item.idProducto)){
                                    var product = products[index];
                                }
                                
                                return (
                                    <OrderCard 
                                        key = {index}
                                        order = {item}
                                        customer = {customer}
                                        product = {product}
                                    />
                                )
                            })
                        ) 
                        :
                        (
                            <div>
                                ¡No hay Pedidos aun!
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

function LabelsItems (){
    const [] = useState();

    return (
        <div className='orders-content-down-labels-items'>
            <div className='orders-labels'><span className='material-icons check'>check_box_outline_blank</span>Pedido<span className='material-icons'>swap_vert</span></div>
            <div className='orders-labels'>Cliente<span className='material-icons'>swap_vert</span></div>
            <div className='orders-labels'>Estado</div>
            <div className='orders-labels'>Producto</div>
            <div className='orders-labels'>Total<span className='material-icons'>swap_vert</span></div>
            <div className='orders-labels'>Fecha<span className='material-icons'>swap_vert</span></div>
        </div>
    );
}

function OrderCard ({ order, customer, product }){
    return (
        <div className='orders-card-item'>
            <div className='orders-card-labels'><span className='material-icons check'>check_box_outline_blank</span>{"#" + order.id}</div>
            <div className='orders-card-labels'>{customer? customer.apellido + " " + customer.nombre : null}</div>
            <div className='orders-card-labels'><StatusDropdown id={order? order.id : null} status={order? order.estadoPedido : null}/></div>
            <div className='orders-card-labels'>{product? product.name : null}</div>
            <div className='orders-card-labels'>{order? "$" + order.total : null}</div>
            <div className='orders-card-labels'>{order? order.fecha : null}</div>
        </div>
    );
}

function StatusDropdown ({id, status}){ 
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const changeStatus = async (status) => {
        try {
            const order = {id: id, estadoPedido: status}
            dispatch(putOrders(order));
            toggleDropdown();
        } catch (error) {
            console.error("Error al obtener los pedidos:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay pedidos para mostrar");
            }
        }
    }

    return (
        <div className='orders-dropdown'>
            <button className='orders-dropdown-toggle' onClick={toggleDropdown}>
                {status == "paid"? 
                    <div className='orders-dropdown-paid'><span className='material-icons'>check</span>Pagado</div> : 
                status == "canceled"? 
                    <div className='orders-dropdown-canceled'><span className='material-icons'>close</span>Cancelado</div> : 
                status == "process"? 
                    <div className='orders-dropdown-process'><span className='material-icons'>hourglass_top</span>En proceso</div> : 
                null}
            </button>
            {isOpen && (
                <div className='orders-dropdown-menu'>
                    <button className='orders-dropdown-item' onClick={() => {changeStatus("paid")}}>
                        <div className='orders-dropdown-paid'><span className='material-icons'>check</span>Pagado</div>
                    </button>
                    <button className='orders-dropdown-item' onClick={() => {changeStatus("canceled")}}>
                        <div className='orders-dropdown-canceled'><span className='material-icons'>close</span>Cancelado</div>
                    </button>
                    <button className='orders-dropdown-item' onClick={() => {changeStatus("process")}}>
                        <div className='orders-dropdown-process'><span className='material-icons'>hourglass_top</span>En proceso</div>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Orders;