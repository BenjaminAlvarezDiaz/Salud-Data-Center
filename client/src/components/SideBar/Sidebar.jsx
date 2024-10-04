import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar}){
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>X</button>
            <nav>
                <ul>
                    <li>
                        <a href="/"><span className="material-icons">home</span> Home </a></li>
                    <li>
                        <a href="#notifications"><span className="material-icons">notifications</span> Notifications </a></li>
                    <li>
                        <a href="#search"><span className="material-icons">search</span> Search </a></li>
                    <li>
                        <a href="#profile"><span className="material-icons">person</span> Profile </a></li>
                    <li>
                        <a href="#about"><span className="material-icons">info</span> About </a></li>
                    <li>
                        <a href="/developer"><span className="material-icons">code</span> Developer zone</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;