import React from 'react'
import {Link} from 'react-router-dom'
import QuestionButtonStyle from '../QuestionButtonStyle'
import NextButtonStyle from '../NextButtonStyle'

const Question5 = (props) =>
  <div className="row">
    <h1>Select your age group. Child is under 18, Senior is over 55.</h1>
    <div className="question-button-group">
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="child" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}> Child </button></Link>
    : <Link to={`/questions/${props.next}`}><button style={QuestionButtonStyle} value="child" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}>Child</button></Link>}
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="adult" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}> Adult </button></Link>
    : <Link to={`/questions/${props.next}`}><button style={QuestionButtonStyle} value="adult" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}>Adult</button></Link>}
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button style={QuestionButtonStyle} value="senior" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}> Senior </button></Link>
    : <Link to={`/questions/${props.next}`}><button style={QuestionButtonStyle} value="senior" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}>Senior</button></Link>}

    </div>
    <div className="next-button-group">
      {props.info.editingQuestion === true ? <Link to={`/questions/8`} style={NextButtonStyle}>Back</Link> : <Link to={`/questions/${props.previous}`} style={NextButtonStyle}>Back</Link>}
    </div>
  </div>

export default Question5;
