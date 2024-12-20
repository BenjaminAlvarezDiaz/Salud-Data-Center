import React from 'react';

import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar, logo, companyName}){
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='sizedbox-vertical'/>
            {/*<button className="close-btn" onClick={toggleSidebar}>X</button>*/}
            {logo && companyName? 
                <div className='company'><img src={logo} className='image'/>{companyName}</div>
                : 
                <div className='company'>
                    <div className='not-image'>
                        <span className='material-icons not-image-icon'>store</span>
                    </div>
                    Company Name
                </div>
            }
            <nav className='tools'>
                <ul>
                    <li>
                        <a href="/products">
                            <button className='button'>
                                <span className="material-icons span-icon">local_mall</span> 
                                Productos 
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="/orders">
                            <button className='button'>
                                <span className="material-icons span-icon">receipt_long</span> 
                                Pedidos 
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="/stadistics">
                            <button className='button'>
                                <span className="material-icons span-icon">show_chart</span> 
                                Estadisticas 
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="/customers">
                            <button className='button'>
                                <span className="material-icons span-icon">group</span> 
                                Clientes 
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="/settings">
                            <button className='button'>
                                <span className="material-icons span-icon">settings</span> 
                                Configuraciones 
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className='help'>
                <ul>
                    <li>
                        <a href="/help">
                            <button className='button'>
                                <span className="material-icons span-icon">info</span> 
                                Ayuda 
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;