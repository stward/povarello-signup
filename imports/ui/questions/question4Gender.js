import React from 'react'
import {Link} from 'react-router-dom'
import QuestionButtonStyle from '../QuestionButtonStyle'
import NextButtonStyle from '../NextButtonStyle'

const Question4 = (props) =>
  <div className="row">
    <h1> Please select your gender </h1>
    <div className="question-button-group">
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="male" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Male </button></Link>
    : <Link to={`/questions/${props.next}`}><button style={QuestionButtonStyle} value="male" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Male </button></Link>}
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="female" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Female </button></Link>
    : <Link to={`/questions/${props.next}`}><button style={QuestionButtonStyle} value="female" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Female </button></Link>}
    </div>
    <div className="next-button-group">
      {props.info.editingQuestion === true ? <Link to={`/questions/8`} style={NextButtonStyle}>Back</Link> : <Link to={`/questions/${props.previous}`} style={NextButtonStyle}>Back</Link>}
    </div>
  </div>

export default Question4;
