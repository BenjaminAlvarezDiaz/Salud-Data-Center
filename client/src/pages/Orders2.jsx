import { React, useState, useEffect } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import '../styles/orders2.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LineChart from '../components/LineChart/LineChart';

function Stats(){
const [isSidebarOpen, setSidebarOpen] = useState(true);
const [orderpaids, setOrder] = useState([]);
var orderpaid = { id: null , idCliente: null, idProducto: null, estadoPedido: 'paid', total: null};
const navigate = useNavigate();
const dispatch = useDispatch();
const toggleSidebar = () => {
    //alert('¡Me hiciste click!');
    setSidebarOpen(!isSidebarOpen);
};

const dispatchOrder = async (orderpaid) => {
    
};

useEffect(() => {
    dispatchOrder(orderpaid);
}, []);
useEffect(() => {
    console.log("Estado actual de orderpaids:", orderpaids);
}, [orderpaids]);

const totals = orderpaids.map(order => order.total); // Extrae los totales
const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']; // Etiquetas para los días

    return(
        <div className='orders2__main'>
            <AppBar/>
            <div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='orders2__main1'>
                <div className='orders2__container'>
                    <div className='contenedor__cuadricula'>
                    <button className="contenedor__cuadrilla contenedor__cuadrilla-1"><img src="" alt="" /></button>
                    <button className="contenedor__cuadrilla contenedor__cuadrilla-2"><img src="" alt="" /></button>
                    </div>
                    <input className='input__pro' type="search" />
                    <button className="botones cont--basura"><img src="" alt="" /></button>
                    <button className="botones boton1">Filtrer<span className='cont--filtrer'></span></button>
                    <button className="botones boton2"><img className='cont--import' src="" alt="" /><span>Import</span></button>   
                    <button className="botones boton3"><img className='cont--export' src="" alt="" /><span>Export</span></button>
                </div>
                <div className='orders2__containerPro'>
                    <div className='orders2__cont-1'>
                        <input className='orders2__input' type="checkbox" />
                        <p className='orders2__text'>Order</p>
                        <span className='orders2__span cont-span1'></span>
                        <p className='orders2__text'>Customer</p>
                        <span className='orders2__span cont-span2'></span>
                        <p className='orders2__text'>Status</p>
                        <p className='orders2__text'>Product</p>
                        <p className='orders2__text'>Total</p>
                        <p className='orders2__text'>Date</p>
                    </div>
                    <div className='orders2__cont-2'>
                    <input className='orders2__input input-quebrado' type="checkbox" />
                    <input className='orders2__input-text text--1' type="text" />
                    <input className='orders2__input-text text--2' type="text" />
                    <select name="select" id="">
                        <optgroup>
                        <option value=""><span className='orders2__options1'>PAID</span></option>
                        <option value=""><span className='orders2__options2'>CANCELED</span></option>
                        <option value=""><span className='orders2__options3'>PROCESS</span></option>
                        </optgroup>
                    </select>
                    <input className='orders2__input-image' type="image" src="../assets/paid.PNG" alt="Submit" width="48" height="48" />
                    <input className='orders2__input-text text--3' type="text" />
                    <input className='orders2__input-date' type="date" />
                    </div>
                </div>
            </div>
            
            <div className='orders2__container2'>

            </div>
        </div>
        
    );
}

export default Stats;