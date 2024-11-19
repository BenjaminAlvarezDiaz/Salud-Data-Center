import React, {useState} from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import SearchBox from '../components/SearchBox/SearchBox';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/Customers.css';

function Customers (){
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };
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
                    <SearchBox />
                    <div className='customers-content-filter'>
                        <button className='customers-content-filter-button'>
                            <span className='material-icons'>filter_alt</span>
                            Filter
                        </button>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Customers;