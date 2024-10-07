import React, {useState} from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import '../styles/Help.css';

function Stats(){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return(
        <div className='main-container'>
            <AppBar></AppBar>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Stats;