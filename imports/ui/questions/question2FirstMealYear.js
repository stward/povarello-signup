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
<<<<<<< HEAD
      <Link to={`/questions/4`}><RaisedButton className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>Yes</RaisedButton></Link>
      <Link to={`/questions/${props.next}`}><RaisedButton className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>No</RaisedButton></Link>
=======
      {props.info.editingQuestion === true ?
        <Link to={`/questions/8`}><button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>Yes</button></Link>
      : <Link to={`/questions/4`}><button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>Yes</button></Link>}
      {props.info.editingQuestion === true ?
        <Link to={`/questions/8`}><button className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>No</button></Link>
      : <Link to={`/questions/${props.next}`}><button className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>No</button></Link>}
>>>>>>> 45722b7f32e84975e0c0e315356173222d6f80a1
    </div>
    </MuiThemeProvider>
    <div className="next-button-group">
<<<<<<< HEAD
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Link to={`/questions/${props.previous}`}><RaisedButton style={NextButtonStyle}>Back</RaisedButton></Link>
      </MuiThemeProvider>
=======
    {props.info.editingQuestion === true ? <Link to={`/questions/8`} className="next-button">Back</Link> : <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>}
>>>>>>> 45722b7f32e84975e0c0e315356173222d6f80a1
    </div>
  </div>

export default Question2;
