import { React, useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import SearchBox from '../components/SearchBox/SearchBox';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/Settings.css';

function Settings (){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {

    }, []);

    return (
        <div className='settings-main-container'>
            <AppBar 
                content={<SearchBox placeHolder={"Buscar"}/>}
                contentRight={<div className='settings-icon-right'>
                    <span className='material-icons icon-app-bar'>notifications</span>
                </div>}
                iconRight={<span className='material-icons icon-app-bar'>store</span>}
            />
            <div className='settings-content'>
                <div className='settings-content-up'>
                    <div className='settings-content-up-left'>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='settings-content-up-right'>
                        <div>
                            <div className='settings-label-title'>Nombre:</div>
                            <div className='settings-input-container title'><input className='settings-input title'></input></div>
                        </div>
                        <div>
                            <div className='settings-label'>Sitio web:</div>
                            <div className='settings-input-container'><input className='settings-input'></input></div>
                        </div>
                        <div>
                            <div className='settings-label'>Contacto:</div>
                            <div className='settings-input-container'><input className='settings-input'></input></div>
                        </div>
                    </div>
                </div>
                <div className='settings-content-down'>
                    <div className='settings-content-down-left'>
                        <div>
                            <div className='settings-label'>Nombre de usuario:</div>
                            <div className='settings-input-container'><input className='settings-input'></input></div>
                        </div>
                        <div>
                            <div className='settings-label'>Contraseña:</div>
                            <div className='settings-input-container'><input className='settings-input'></input></div>
                        </div>
                        <div>
                            <div className='settings-label'>Correo electronico:</div>
                            <div className='settings-input-container'><input className='settings-input'></input></div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Settings;