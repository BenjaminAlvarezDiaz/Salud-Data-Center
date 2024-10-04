import React, { useState } from 'react';
import './SearchBox.css';

function SearchBox({ placeHolder, data }){
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        const filteredSuggestions = data.filter(item => 
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredData(filteredSuggestions);
    };

    const clearInput = () => {
        setQuery('');
        setFilteredData([]);
    };

    const searchInput = () => {

    }

    return (
        <div className="search">
            <div className="search-input">
                <button className="search-btn" onClick={searchInput}>
                    <span className="material-icons">search</span>
                </button>
                <input
                    type="text"
                    placeholder={placeHolder}
                    value={query}
                    onChange={handleInputChange}
                />
                {query?
                <button className="clear-btn" onClick={clearInput}>
                    <span className="material-icons">close</span>
                </button> : null
                }
            </div>
            {filteredData.length > 0 && (
                <div className="data-result">
                    {filteredData.slice(0, 10).map((item, index) => (
                        <a key={index} href="#" className="data-item">
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBox;