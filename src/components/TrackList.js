import React from "react";

import Track from "./Track";

function TrackList({
    tracks,
    addTrack,
    removeTrack,
    isPlaylistTrack,
}) {

    return (
        <>
            {
                tracks?.map(track => 
                    <Track 
                        track={track}
                        addTrack={addTrack}
                        removeTrack={removeTrack}
                        isPlaylistTrack={isPlaylistTrack}
                    />
                )
            }
        </>
    );

}

export default TrackList;