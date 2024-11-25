import { React, useState, useEffect } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import '../styles/stats.css';
import { getOrders } from '../Redux/actions/Stats_actions';
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
    try {
        const orders = await dispatch(getOrders(orderpaid));
        console.log("Datos obtenidos después del dispatch:", orders);
        setOrder(Array.isArray(orders) ? orders : []);
    } catch (error) {
        console.error("Error al consultar los pedidos:", error);
    }
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
        <div className='stats-main-container'>
            <AppBar/>
            <div className='stats-content-Global'>
            <div className='stats-content'>
                <div className='stats-content-b'> Holis</div>
                <div className='stats-content-b'>H</div>
                <div className='stats-content-b'>o</div>
            </div>
            <div className='stats-LineChar'>
            <LineChart totals={totals} labels={labels} />
            </div>
            </div>
            <div className='stats-content-c'>
                Hola
                <div>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Stats;