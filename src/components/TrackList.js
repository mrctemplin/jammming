import React from "react";

import Track from "./Track";

function TrackList({tracks}) {
 
        return (
            <>
                {
                    tracks?.map(track => 
                        <Track 
                        track={track}
                        key={track.id}
                        />
                    )
                }
            </>
        );

}

export default TrackList;