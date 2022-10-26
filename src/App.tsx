import React from "react";
import MediaList from "./components/MediaList";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <span>Kodkväll med Knowit</span>
      </header>
      <MediaList />
    </div>
  );
}

export default App;
