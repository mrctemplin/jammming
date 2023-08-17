import React from "react";

import TrackList from "./TrackList"

function Playlist(props) {
    return (
        <>
            <input type="text" placeholder="Playlist name" />
            <TrackList 
                tracks={props.playlistTracks} 
                isPlaylistTrack={true} 
                onRemove={props.onRemove}
            />
            <button>Add to Spotify</button>
        </>
    );
}

export default Playlist; 