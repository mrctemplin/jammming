import React from "react";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults"
import Playlist from "./components/Playlist";

function App() {
  return (
    <>
      <h1>Ja<span style={{ color: "purple" }}>MMM</span>ing</h1>
      <div>
        <SearchBar />
        <div>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </>
  );
}

export default App;
