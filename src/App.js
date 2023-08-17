import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults"
import Playlist from "./components/Playlist";

const DATA = [
  {
    name: "Waterfalls",
    artist: "Luke Christopher",
    album: "Waterfalls",
    id: 1
  },
  {
    name: "For Tonight",
    artist: "Giveon",
    album: "Give or Take",
    id: 2
  },
  {
    name: "Circles",
    artist: "Post Malone",
    album: "Hollywood's Bleeding",
    id: 3
  },
  {
    name: "Heartbreak Fiction",
    artist: "Luke Christopher",
    album: "TMRWFRVR",
    id: 4
  }
];

function App() {
  const [searchResults, setSearchResults] = useState(DATA);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = newTrack => {
    if (playlistTracks.some((track) => track.id === newTrack.id)) {
      return;
    } 
    setPlaylistTracks((prevTracks) => [...prevTracks, newTrack]);
  }

  const removeTrack = track => {
    setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }

  return (
    <>
      <h1>Ja<span style={{ color: "purple" }}>MMM</span>ing</h1>
      <div>
        <SearchBar />
        <div>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            playlistName={playlistName}
            onNameChange={setPlaylistName}
          />
        </div>
      </div>
    </>
  );
}

export default App;
