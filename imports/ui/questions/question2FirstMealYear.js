import React from 'react'
import {Link} from 'react-router-dom'
import QuestionButtonStyle from '../QuestionButtonStyle'
import NextButtonStyle from '../NextButtonStyle'
import QuestionsFlex from '../QuestionsFlex'

const Question2 = (props) =>
  <div className="row">
    <h1>Is this your first meal here this year?</h1>
    <div style={QuestionsFlex} className="question-button-group">
      {props.info.editingQuestion === true ?
        <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="yes" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>Yes</button></Link>
      : <Link to={`/questions/4`}><button style={QuestionButtonStyle} value="yes" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>Yes</button></Link>}
      {props.info.editingQuestion === true ?
        <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="no" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>No</button></Link>
      : <Link to={`/questions/${props.next}`}><button style={QuestionButtonStyle} value="no" onClick={(event) => props.onChangeHandler("firstMealYear", event.target.value)}>No</button></Link>}
    </div>
    <div className="next-button-group">
        {props.info.editingQuestion === true ? <Link to={`/questions/8`}><button style={NextButtonStyle}>Back</button></Link> : <Link to={`/questions/${props.previous}`}><button style={NextButtonStyle}>Back</button></Link>}
    </div>
  </div>

export default Question2;
