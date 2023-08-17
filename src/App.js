import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults"
import Playlist from "./components/Playlist";

const DATA = [
  {
    name: "Waterfalls",
    artist: "Luke Christopher",
    album: "Waterfalls",
    id: 1,
    uri: 111
  },
  {
    name: "For Tonight",
    artist: "Giveon",
    album: "Give or Take",
    id: 2,
    uri: 222
  },
  {
    name: "Circles",
    artist: "Post Malone",
    album: "Hollywood's Bleeding",
    id: 3,
    uri: 333
  },
  {
    name: "Heartbreak Fiction",
    artist: "Luke Christopher",
    album: "TMRWFRVR",
    id: 4,
    uri: 444
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

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    setPlaylistTracks([]);
    setPlaylistName("");
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
            onSave={savePlaylist}
          />
        </div>
      </div>
    </>
  );
}

export default App;
