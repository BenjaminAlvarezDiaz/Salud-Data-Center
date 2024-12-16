import { React, useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import SearchBox from '../components/SearchBox/SearchBox';
import { getRecords } from '../redux/actions/record_actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/Orders.css';

function Orders (){
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ records, setRecords ] = useState([]);
    var record = { id: null };

    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };
    const dispatchRecords = async () => {

    }

    useEffect(() => {
        dispatchRecords();
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

export default Orders;