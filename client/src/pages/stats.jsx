import React, {useState} from 'react';
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
    console.log('aaaaaa');
    try {
        
        const result = await dispatch(getOrders({orderpaid}));
        setOrder(result.data);
    }catch (error){
        console.error("Error al consultar los pedidos: ", error);
        if (error.response && error.response.status === 404) {
            setError(
              "Error interno del servidor. Por favor, intenta de nuevo más tarde."
            );
        }
    }
}

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
                <LineChart/>
            </div>
            </div>
            <div className='stats-content-c'>
                Hola
                <button onClick={dispatchOrder}>Obtener Orden</button>
                {(orderpaids)}
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Stats;