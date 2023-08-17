import React from "react";

import TrackList from "./TrackList";

function SearchResults({searchResults}) {
    return (
        <>
            <TrackList tracks={searchResults} />
        </>
    );
}

export default SearchResults;