import React from "react";

import TrackList from "./TrackList"

function Playlist() {
    return (
        <>
            <input type="text" placeholder="Playlist name" />
            <TrackList />
            <button>Add to Spotify</button>
        </>
    );
}

export default Playlist; 