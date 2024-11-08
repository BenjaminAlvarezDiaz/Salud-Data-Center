import React from 'react';
import './TabBar.css';

function TabBar ({ items }){
    const itemsDefault = [
        {href: "#home", icon: "home",},
        {href: "#notifications", icon: "notifications",},
        {href: "#search", icon: "search",},
        {href: "#profile", icon: "person",},
        {href: "#aboutme", icon: "note",},
    ];
    return (
        <div className='tabBar'>
            <nav>
                <ul>
                    {items? items.map((item, index) => (
                        <Item key={index} href={item.href} icon={item.icon}/>
                    )) : 
                    itemsDefault.map((item, index) => (
                        <Item key={index} href={item.href} icon={item.icon}/>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

function Item ({href, icon}){
    return (
        <li>
            <a href={href}><span className="material-icons">{icon}</span></a>
        </li>
    );
}

export default TabBar;