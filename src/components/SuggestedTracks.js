import React from "react";
import logo from "../logo.svg";
class SuggestedTracks extends React.Component {
  constructor(){
    super();
    this.state = {
      title: ["TINYC-Crossroad Ft Trixidy", "Dont Worry", "Love Never Died", "Are You Down"],
      artist: ["OTODAYO Records", "Touliver", "Nytrix", "Trixidy"]
    }
  }
  render(){
    return (
        <div className = "tracks" >
          <h2>SUGGESTED TRACKS</h2>
          <div className = "song">
            <img src={logo} />
            <div className = "middle">
              <h3>{this.state.title[0]}</h3>
              <p>{this.state.artist[0]}</p>
            </div>
            <button type="text">...</button>
          </div>
          <div className = "song">
            <img src={logo} />
            <div className = "middle">
              <h3>{this.state.title[1]}</h3>
              <p>{this.state.artist[1]}</p>
            </div>
            <button type="text">...</button>
          </div>
          <div className = "song">
            <img src={logo} />
            <div className = "middle">
              <h3>{this.state.title[2]}</h3>
              <p>{this.state.artist[2]}</p>
            </div>
            <button type="text">...</button>
          </div>
          <div className = "song">
            <img src={logo} />
            <div className = "middle">
              <h3>{this.state.title[3]}</h3>
              <p>{this.state.artist[3]}</p>
            </div>
            <button type="text">...</button>
          </div>

        </div>
    )
  }
}

export default SuggestedTracks;
