import React from "react";

function Track(props) {
    return (
        <>
            <div>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
            </div>
            <button>+</button>
        </>
    );
}

export default Track;