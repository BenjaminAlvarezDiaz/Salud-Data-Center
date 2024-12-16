import { React, useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import SearchBox from '../components/SearchBox/SearchBox';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from '../redux/actions/product_actions';
import '../styles/Customers.css';

function Products (){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ProductVen, setOrder] = useState([]);
    var product = { id: "1" , marca: null, modelo: null, anio: null, precio: null, descripcion: null, ficha_tecnica: null, imagenes: null, CategoriaId: null};
    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };
    const dispatchOrder = async () => {
        try {
            const response = await dispatch(getProducts(product));
            console.log("Datos obtenidos después del dispatch:", response);
            setOrder(Array.isArray(response) ? response : []);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    useEffect(() => {
        dispatchOrder(product); 
    }, []);
    useEffect(() => {
        console.log("Estado actual de Product:", ProductVen);
    }, [ProductVen]);
    return(
        <div className='customers-main-container'>
            <AppBar 
                content={<SearchBox placeHolder={"Buscar"}/>}
                contentRight={<div className='customers-icon-right'>
                    <span className='material-icons icon-app-bar'>notifications</span>
                </div>}
                iconRight={<span className='material-icons icon-app-bar'>store</span>}
            />
            <div className='customers-content'>
                <div className='customers-content-up'>
                    <div className='customers-content-see-items'>
                        <button className='customers-content-buttons'>
                            <span className='material-icons customers-buttons'>splitscreen</span>
                        </button>
                        <button className='customers-content-buttons'>
                            <span className='material-icons customers-buttons'>grid_view</span>
                        </button>
                    </div>
                    <SearchBox placeHolder={'Buscar'}/>
                    <div className='customers-content-filter'>
                        <button className='customers-content-filter-button'>
                            <span className='material-icons'>filter_alt</span>
                            Filter
                        </button>
                    </div>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div>
            <h1>Product Table</h1>
            <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Product info</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductVen.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <input type="checkbox" checked={product.active} readOnly />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            </div>
    )
}
export default Products;
