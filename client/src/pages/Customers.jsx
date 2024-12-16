import { React, useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import SearchBox from '../components/SearchBox/SearchBox';
import Popup from '../components/PopUp/PopUp.jsx';
import usePopup from "../hooks/usePopup.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPatients } from '../redux/actions/patient_actions';
import { getRecords } from '../redux/actions/record_actions';
import { getProducts } from '../redux/actions/product_actions';
import '../styles/Customers.css';

function Customers (){
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const [patients, setPatients] = useState([]);
    var patient = { id: null, nombre: null, apellido: null };

    const [records, setRecords] = useState([]);
    var record = { id: null, dnipaciente: null };

    const [ products, setProducts ] = useState([]);
    var product = { id: null };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };

    const dispatchPatients = async () => {
        try {
            const result = await dispatch(getPatients(patient));
            setPatients(result);
        } catch (error) {
            console.error("Error al obtener los pacientes:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay pacientes para mostrar");
            }
        }
    }
    const dispatchRecords = async () => {
        try {
            const result = await dispatch(getRecords(record));
            setRecords(result);
            console.log(result);
        } catch (error) {
            console.error("Error al obtener los registros:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay registros para mostrar");
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

    useEffect(() => {
        dispatchPatients();
        //dispatchRecords();
        //dispatchProducts();
    }, []);

    return (
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
                <div className='customers-patients-list'>
                    {patients.map((item, index) => (
                        <UserCard
                            key = {index}
                            patient = {item}
                        />
                    ))}
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

function UserCard ({patient}){
    const [ isOpen, setIsOpen ] = useState(false);
    const { isPopupOpen, openPopup, closePopup } = usePopup();
    const [ record, setRecord ] = useState([]);
    const [ product, setProduct ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ searchArray, setSearchArray ] = useState([]);
    const [ filteredItems, setFilteredItems ] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const onClickPopUp = async (event) => {
        console.log(patient.dni);
        event.stopPropagation();
        var patientData = {id: null, dnipaciente: patient.dni};
        try{
            //get last record
            var result = await dispatch(getRecords(patientData));
            setRecord(result);
            //get product by id
            var product = { id: result.suggestProduct };
            result = await dispatch(getProducts(product));
            setProduct(result.data);
            //get all products
            product = { id: null };
            result = await dispatch(getProducts(product));
            setProducts(result.data);
            setSearchArray(Object.values(result.data).map(item => item.modelo + " " + item.marca));
        } catch (error) {
            console.error("Error al obtener el registro:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay registro para mostrar");
            }
        }
        openPopup();
    }

    const onFilter = (filteredData) => {
        setFilteredItems(filteredData); // Guarda los datos filtrados en el estado del componente padre
        /*console.log(searchArray.filter(item => item.toLowerCase().includes(filteredItems)));*/
        console.log(filteredData);
        /*setData(searchArray.filter(item => item.toLowerCase().includes(filteredItems)));*/
    };

    if(!isOpen){
        return (
            <div className='customers-user-card-short'>
                <button className='customers-user-card' onClick={toggleDropdown}>
                    <div>
                        <div className='customers-user-card-data-left'><span className='material-icons user-data'>person</span> { patient.apellido + " " + patient.nombre } </div>
                        <div className='customers-user-card-data-left dni'><span className="material-symbols-outlined user-data">id_card</span> { patient.dni } </div>
                    </div>
                </button>
            </div>
        );
    } else {
        return (
            <div className='customers-user-card-long'>
                <button className='customers-user-card' onClick={toggleDropdown}>
                    <div>
                        <div className='customers-user-card-data-left'><span className='material-icons user-data'>person</span> { patient.apellido + " " + patient.nombre } </div>
                        <div className='customers-user-card-data-left dni'><span className="material-symbols-outlined user-data">id_card</span> { patient.dni } </div>
                    </div>
                    <div className='row'>
                        <div className='colum'>
                            <div className='customers-user-card-data-right'><span className='material-icons'>cake</span> { patient.age } </div>
                            <div className='customers-user-card-data-right'><span className='material-icons'>phone</span> { patient.telefono } </div>
                            <div className='customers-user-card-data-right'><span className='material-icons'>mail</span> { patient.email } </div>
                        </div>
                    </div>
                    <span className='material-icons' onClick={onClickPopUp}>
                        more_horiz
                    </span>
                </button>
                {isPopupOpen && (
                    <Popup
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                        children={
                            <div className='customers-popup-main-container'>
                                <div className='customers-popup-contact-container'>
                                    <div className='customers-popup-person'>
                                        <span className='material-icons popup-person'>person</span>
                                    </div>
                                    <div className='customers-popup-contact-labels'>
                                        <h2>{patient.apellido + " " + patient.nombre}</h2>
                                        <div className='customers-popup-label'>{patient.email}</div>
                                        <div className='customers-popup-label'>{ "+" + patient.telefono + " " + "+" + patient.telefono2}</div>
                                    </div>
                                </div>
                                <div className='customers-popup-record-container'>
                                    <div className='customers-popup-record-labels'>
                                        <div className='customers-popup-record-label'>
                                            <span className="material-symbols-outlined record-icon">stethoscope</span> Tratamiento:
                                        </div>
                                        {patient.tratamiento}
                                        <div className='customers-popup-record-label'>
                                            <span className="material-symbols-outlined record-icon">clinical_notes</span> Indicaciones:
                                        </div>
                                        {record.indicaciones}
                                        <div className='customers-popup-record-label'>
                                            <span className='material-icons record-icon'>medication</span> Producto sugerido:
                                        </div>
                                        {product.name}
                                    </div>
                                    <div className='customers-popup-products-container'>
                                        <SearchBox placeHolder={"Buscar"} data={searchArray} onFilter={onFilter}/>
                                        <div className='customers-popup-products-list'>
                                            {filteredItems.length > 0? 
                                                (products.map((item, index) => (
                                                    filteredItems == item.modelo + " " + item.marca ||
                                                    filteredItems == item.modelo + item.marca || 
                                                    filteredItems == item.modelo || 
                                                    filteredItems == item.marca?
                                                    <ProductCard
                                                        key = {index}
                                                        title = {item.name}
                                                        subTitle = {item.id}
                                                    /> : null
                                                )))
                                                :

                                                (products.map((item, index) => (
                                                    <ProductCard
                                                        key = {index}
                                                        title = {item.name}
                                                        subTitle = {item.id}
                                                    />
                                                )))
                                            }
                                        </div>
                                        <button>Ofrecer</button>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                )}
            </div>
        );
    }
}

function ProductCard ({title, subTitle}){
    return (
        <div className='customers-product-card-container'>
            <span className='material-icons product-card-icon'>medication</span>
            <div className='customers-product-card-labels'>
                <div>{title}</div>
                <div>{ "ID:" + subTitle}</div>
            </div>
        </div>
    );
}

export default Customers;