import React from 'react';
import './TabBar.css';

function TabBar ({ items }){
    const itemsDefault = [
        {href: "#home", icon: "home", isActive: null},
        {href: "#notifications", icon: "notifications", isActive: null},
        {href: "#search", icon: "search", isActive: null},
        {href: "#profile", icon: "person", isActive: null},
        {href: "#aboutme", icon: "note", isActive: null},
    ];
    return (
        <div className='tabBar'>
            <nav>
                <ul>
                    {items? items.map((item, index) => (
                        <Item key={index} href={item.href} icon={item.icon} isActive={item.isActive}/>
                    )) : 
                    itemsDefault.map((item, index) => (
                        <Item key={index} href={item.href} icon={item.icon} isActive={item.isActive}/>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

function Item ({href, icon, isActive}){
    return (
        <li>
            <a href={href}>{isActive? 
                <span className="material-icons item-icon-active">{icon}</span> 
                : 
                <span className="material-icons item-icon-inactive">{icon}</span>}
            </a>
        </li>
    );
}

export default TabBar;