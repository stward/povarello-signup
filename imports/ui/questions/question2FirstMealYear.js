import React from 'react'
import {Link} from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import NextButtonStyle from '../NextButtonStyle'

const Question2 = (props) =>
  <div className="row">
    <h1>Is this your first meal here this year?</h1>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="question-button-group">
      <Link to={`/questions/4`}><RaisedButton className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>Yes</RaisedButton></Link>
      <Link to={`/questions/${props.next}`}><RaisedButton className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>No</RaisedButton></Link>
    </div>
    </MuiThemeProvider>
    <div className="next-button-group">
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Link to={`/questions/${props.previous}`}><RaisedButton style={NextButtonStyle}>Back</RaisedButton></Link>
      </MuiThemeProvider>
    </div>
  </div>

export default Question2;
