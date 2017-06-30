import React from 'react'
import {Link} from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 40,
  fontSize: 80,
  padding: 80,
}

const Splash = (props) =>
  <div>
    <h1 className="welcome-label">Welcome to the Poverello Center</h1>
      <div className="start-button-container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Link to={`/questions/1`}><RaisedButton style={style}>Start Here</RaisedButton></Link>
        </MuiThemeProvider>
      </div>
  </div>

export default Splash;
