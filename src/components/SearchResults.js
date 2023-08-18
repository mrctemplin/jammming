import React from "react";

import TrackList from "./TrackList";

function SearchResults({ searchResults, addTrack }) {
    
    return (
        <>
            <TrackList 
                tracks={searchResults} 
                addTrack={addTrack} 
            />
        </>
    );
}

export default SearchResults;