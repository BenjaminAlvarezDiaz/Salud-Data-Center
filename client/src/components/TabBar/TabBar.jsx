import React from 'react';
import './TabBar.css';

function TabBar (){
    return (
        <div className='tabBar'>
            <nav>
                <ul>
                    <li>
                        <a href="#home"><span className="material-icons">home</span></a>
                    </li>
                    <li>
                        <a href="#notifications"><span className="material-icons">notifications</span></a>
                    </li>
                    <li>
                        <a href="#search"><span className="material-icons">search</span></a>
                    </li>
                    <li>
                        <a href="#profile"><span className="material-icons">person</span></a>
                    </li>
                    <li>
                        <a href="#about"><span className="material-icons">info</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TabBar;