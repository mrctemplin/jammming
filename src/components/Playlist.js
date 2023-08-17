import React from "react";

import TrackList from "./TrackList"

function Playlist(props) {
    const handleNameChange = ({target}) => {
        props.onNameChange(target.value);
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="Playlist name" 
                onChange={handleNameChange} 
                value={props.playlistName} 
            />
            <button onClick={props.onSave}>Add to Spotify</button>
            <TrackList 
                tracks={props.playlistTracks} 
                isPlaylistTrack={true} 
                onRemove={props.onRemove}
            />
        </>
    );
}

export default Playlist; 