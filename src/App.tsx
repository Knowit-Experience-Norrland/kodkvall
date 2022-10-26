import React from "react";
import logo from "./logo.svg";
import { MediaList } from "./components";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <span>Kodkväll med Knowit</span>
      </header>
      <div className='container'>
        <MediaList />
      </div>
    </div>
  );
}

export default App;
