import React from 'react';
import './App.css'

function SearchBar ( props ) {
    return (
        <form>
            Search:  
            <input type="text" placeholder=" " id="searchBarHere"></input>
            <button type="button">Search</button>
        </form>
    )
}

export default SearchBar;