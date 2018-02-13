import React, { Component } from "react";
import "./App.css";
import SpacePictures from "./SpacePictures.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Space Pictures for Better Health</h1>
        </header>
        <SpacePictures />
      </div>
    );
  }
}

export default App;
