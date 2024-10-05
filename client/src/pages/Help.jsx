import React, {useState} from 'react';
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
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Help;