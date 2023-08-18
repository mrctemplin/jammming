import React from "react";

function Track({
    track,
    addTrack,
    removeTrack,
    isPlaylistTrack
}) {

    return (
        <>
            <div key={track.id}>
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
                <p>{track.album}</p>
            </div>
            {
                isPlaylistTrack ? 
                <button onClick={() => removeTrack(track)}>Remove</button> : 
                <button onClick={() => addTrack(track)}>Add</button>
            }
        </>
    );
}

export default Track;