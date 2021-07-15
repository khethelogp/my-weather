import React from 'react';

const SearchBar = () => {
    return ( 
        <div className="searchBar">
            <form className="search-form">
                <input className="search-bar" type="text" placeholder="Enter a Town or City"/> 
                <button type="submit">
                <i className="fas fa-search"></i>
                </button>   
            </form>
        </div>
    );
}

export default SearchBar;