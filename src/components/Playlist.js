import React from "react";

import TrackList from "./TrackList"

function Playlist({ 
    playlistTracks,  
    removeTrack,
    playlistName,
    setPlaylistName, 
    savePlaylist
}) {

    return (
        <>
            <input 
                type="text" 
                placeholder="Playlist name" 
                onChange={(e) => setPlaylistName(e.target.value)} 
                value={playlistName} 
            />
            <button onClick={savePlaylist}>Add to Spotify</button>
            <TrackList 
                tracks={playlistTracks} 
                isPlaylistTrack={true} 
                removeTrack={removeTrack}
            />
        </>
    );
}

export default Playlist; 