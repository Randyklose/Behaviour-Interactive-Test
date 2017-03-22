import React from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class TopMenu extends React.Component {
  constructor(){
    super()
    this.state = {
      title: "SZic"
    }
  }
  render(){

    return (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div className = "topMenu">
        <AppBar
          title={this.state.title}
          style={{backgroundColor: 'rgba(12, 54, 82, 0.84)'}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    </MuiThemeProvider>
    )
  }
}

export default TopMenu;
