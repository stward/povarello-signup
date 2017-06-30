import React from 'react'
import {Link} from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import NextButtonStyle from '../NextButtonStyle'

const Question2 = (props) =>
  <div className="row">
    <h1>Is this your first meal here this year?</h1>
    <div className="question-button-group">
      {props.info.editingQuestion === true ?
        <Link to={`/questions/8`}><button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>Yes</button></Link>
      : <Link to={`/questions/4`}><button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>Yes</button></Link>}
      {props.info.editingQuestion === true ?
        <Link to={`/questions/8`}><button className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>No</button></Link>
      : <Link to={`/questions/${props.next}`}><button className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>No</button></Link>}
    </div>
    <div className="next-button-group">
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        {props.info.editingQuestion === true ? <Link to={`/questions/8`}><RaisedButton style={NextButtonStyle}>Back</RaisedButton></Link> : <Link to={`/questions/${props.previous}`}><RaisedButton style={NextButtonStyle}>Back</RaisedButton></Link>}
      </MuiThemeProvider>
    </div>
  </div>

export default Question2;
