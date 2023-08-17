import React from "react";

import Track from "./Track";

function TrackList(props) {
        return (
            <>
                {
                    props.tracks?.map(track => 
                        <Track 
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isPlaylistTrack={props.isPlaylistTrack}
                        onRemove={props.onRemove}
                        />
                    )
                }
            </>
        );

}

export default TrackList;