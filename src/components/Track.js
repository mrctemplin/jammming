import React from "react";

function Track({ track }) {
    return (
        <>
            <div>
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
                <p>{track.album}</p>
            </div>
            <button>+</button>
        </>
    );
}

export default Track;