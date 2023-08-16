import React from "react";

function SearchBar() {
    return (
        <>
            <input type="text" name="search" placeholder="Search for songs" />
            <button>Go</button>
        </>
    );
}

export default SearchBar;