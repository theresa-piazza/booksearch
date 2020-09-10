import React from 'react';
import './App.css'
function SearchBar ( props ) {
    return (
        <form onSubmit={props.handleFetch}>
            Search:  
            <input type="text" placeholder=" " id="searchBarHere"></input>
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchBar;