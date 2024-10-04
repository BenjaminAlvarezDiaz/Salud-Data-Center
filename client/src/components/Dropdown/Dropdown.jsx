import React, {useState} from 'react';
import './Dropdown.css';

function Dropdown (){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            <button className= "dropdown-toggle" onClick={toggleDropdown}>
                Menu
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#item1" className="dropdown-item">Item 1</a>
                    <a href="#item2" className="dropdown-item">Item 2</a>
                    <a href="#item3" className="dropdown-item">Item 3</a>
                </div>
            )}
        </div>
    );
}

export default Dropdown;