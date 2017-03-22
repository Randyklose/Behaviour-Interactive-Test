import React from "react";
import { Jumbotron } from "react-bootstrap";
class JumbotronDiv extends React.Component {
  constructor(){
    super()
    this.state = {
      title: "Dubscribe",
      author: "Figure & Dack Janiels - The Ritual"
    }
  }
  render(){
    return (
      <div className="container">
        <div className = "jumbotron">
          <Jumbotron>
            <div className = "inside">
              <p>{this.state.title}</p>
              <p>{this.state.author}</p>
            </div>
          </Jumbotron>
        </div>
        </div>
    )
  }
}

export default JumbotronDiv;
