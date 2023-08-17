import React from "react";

import TrackList from "./TrackList";

function SearchResults(props) {
    return (
        <>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </>
    );
}

export default SearchResults;