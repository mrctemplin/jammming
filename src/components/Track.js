import React from "react";

function Track(props) {
    const addTrack = event => {
        props.onAdd(props.track);
    }

    const removeTrack = event => {
        props.onRemove(props.track);
    }

    return (
        <>
            <div>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
            </div>
            {props.isPlaylistTrack ? <button onClick={removeTrack}>-</button> : <button onClick={addTrack}>+</button>}
        </>
    );
}

export default Track;