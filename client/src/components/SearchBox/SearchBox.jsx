import React, { useState, useEffect, useRef } from 'react';
import './SearchBox.css';

function SearchBox({ placeHolder, data, onFilter, customStyles = {} }){
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const searchBoxRef = useRef(null);

    const handleInputChange = (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        const filteredSuggestions = data.filter(item => 
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredData(filteredSuggestions);

        if (onFilter) {
            onFilter(searchQuery.toLowerCase());
        }

        if(event.target.value.length == 0){
            setQuery('');
            setFilteredData([]);
            if (onFilter) {
                onFilter([]);
            }
        }
    };

    const clearInput = () => {
        setQuery('');
        setFilteredData([]);
        if (onFilter) {
            onFilter([]);
        }
    };

    const searchInput = () => {

    }

    const handleSuggestionClick = (item) => {
        setQuery(item);
        if (onFilter) {
            onFilter(item.toLowerCase());
        }
        setFilteredData([]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setFilteredData([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={customStyles.searchContainer || "search"} ref={searchBoxRef}>
            <div className={customStyles.inputContainer || "search-input"}>
                <button className={customStyles.searchButton || "search-btn"} onClick={searchInput}>
                    <span className={`${customStyles.searchIcon || "material-icons"} search-icon`}>search</span>
                </button>
                <input
                    type="text"
                    placeholder={placeHolder}
                    value={query}
                    onChange={handleInputChange}
                    className={customStyles.input || ""}
                />
                {query?
                <button className={customStyles.clearButton || "clear-btn"} onClick={clearInput}>
                    <span className={`${customStyles.clearIcon || "material-icons"} clear-icon`}>close</span>
                </button> : <div className={customStyles.clearButton || "clear-btn"}/>
                }
            </div>
            {onFilter? filteredData.length > 0 && (
                <div className={customStyles.resultsContainer || "data-result"}>
                    {filteredData.slice(0, 10).map((item, index) => (
                        <a 
                            key={index} 
                            href="#" 
                            className={customStyles.resultItem || "data-item"}
                            onClick={() => handleSuggestionClick(item)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default SearchBox;