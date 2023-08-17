import React from "react";

import TrackList from "./TrackList";

function SearchResults(props) {
    return (
        <>
            <TrackList tracks={props.searchResults} />
        </>
    );
}

export default SearchResults;