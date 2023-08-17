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
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <>
      <h1>Ja<span style={{ color: "purple" }}>MMM</span>ing</h1>
      <div>
        <SearchBar />
        <div>
          <SearchResults searchResults={searchResults} />
          <Playlist 
          />
        </div>
      </div>
    </>
  );
}

export default App;
