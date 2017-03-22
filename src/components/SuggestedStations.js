import React from "react";

class SuggestedStations extends React.Component {
  constructor(){
    super();
    this.state = {
      title: ["DEEP HOUSE", "CLASSIC-ROCK", "TRAP"],
      type: "Deep House"
    }
  }
  render(){
    return (
      <div className = "suggestedStations">
        <h2>SUGGESTED STATIONS</h2>
        <div className = "stations">
          <div className = "first">
            <a onclick="this.firstChild.play()" class="button">
              <audio src="http://upload.wikimedia.org/wikipedia/commons/a/a9/Tromboon-sample.ogg">
              </audio>
            &#9658;</a>​
            <div className = "inside">
              <h5>{this.state.title[0]}</h5>
              <p>{this.state.type}</p>
            </div>
          </div>
          <div className = "second">
            <a onclick="this.firstChild.play()" class="button">
              <audio src="http://upload.wikimedia.org/wikipedia/commons/a/a9/Tromboon-sample.ogg">
              </audio>
            &#9658;</a>​
            <div className = "inside">
              <h5>{this.state.title[1]}</h5>
              <p>{this.state.type}</p>
            </div>
          </div>
          <div className = "third">
            <a onclick="this.firstChild.play()" class="button">
              <audio src="http://upload.wikimedia.org/wikipedia/commons/a/a9/Tromboon-sample.ogg">
              </audio>
            &#9658;</a>​
            <div className = "inside">
              <h5>{this.state.title[2]}</h5>
              <p>{this.state.type}</p>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default SuggestedStations;
