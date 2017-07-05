import React from 'react'
import {Link} from 'react-router-dom'
import QuestionButtonStyle from '../QuestionButtonStyle'
import NextButtonStyle from '../NextButtonStyle'

const Question7 = (props) =>
  <div className="row">
    <h1>Are you a veteran?</h1>
    <div className="question-button-group">
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="yes" onClick={(event) => props.onChangeHandler("veteran", event.target.value)}> Yes </button></Link>
    : <Link to={`/questions/${props.next}`}><button style={QuestionButtonStyle} value="yes" onClick={(event) => props.onChangeHandler("veteran", event.target.value)}>Yes</button></Link>}
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="no" onClick={(event) => props.onChangeHandler("veteran", event.target.value)}> No </button></Link>
    : <Link to={`/questions/${props.next}`}><button style={QuestionButtonStyle} value="no" onClick={(event) => props.onChangeHandler("veteran", event.target.value)}>No</button></Link>}
    </div>
    <div className="next-button-group">
      {props.info.editingQuestion === true ? <Link to={`/questions/8`} style={NextButtonStyle}>Back</Link> : <Link to={`/questions/${props.previous}`} style={NextButtonStyle}>Back</Link>}
    </div>
  </div>

export default Question7;
