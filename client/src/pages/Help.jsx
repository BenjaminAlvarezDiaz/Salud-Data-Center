import React, {useState} from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import '../styles/Help.css';

function Help(){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };

    return(
        <div className='main-container'>
            <AppBar/>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Help;