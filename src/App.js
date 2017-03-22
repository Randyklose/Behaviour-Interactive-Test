import React, { Component } from 'react';
import './App.css';
import TopMenu from "./components/TopMenu";
import JumbotronDiv from "./components/JumbotronDiv";
import SuggestedStations from "./components/SuggestedStations";
import SuggestedTracks from "./components/SuggestedTracks";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <JumbotronDiv />
        <SuggestedStations />
        <SuggestedTracks />
      </div>
    );
  }
}

export default App;
