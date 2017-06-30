import React from 'react'
import {Link} from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import NextButtonStyle from '../NextButtonStyle'

const Question1 = (props) =>
  <div className="row">
    <h1 className="welcome-label">Please enter your name</h1>
    <div className="question-button-group">
      <input className="form-control" type="text" placeholder="Enter Your FIRST and LAST Name Here" onChange={(event) => props.onChangeHandler("name", event.target.value)} />
    </div>
    <div className="next-button-group">
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Link to={`/questions/${props.next}`}><RaisedButton style={NextButtonStyle}>Next</RaisedButton></Link>
      </MuiThemeProvider>
    </div>
  </div>

export default Question1;
