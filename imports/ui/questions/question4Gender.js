import React from 'react'
import {Link} from 'react-router-dom'

const Question4 = (props) =>
  <div className="row">
    <h1> Please select your gender </h1>
    <div className="question-button-group">
      <Link to={`/questions/${props.next}`}><button className="question-button" value="male" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Male </button></Link>
      <Link to={`/questions/${props.next}`}><button className="question-button" value="female" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Female </button></Link>
    </div>
    <div className="next-button-group">
      {props.info.editingQuestion === true ? <Link to={`/questions/8`} className="next-button">review answers</Link> : null}
      <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>
    </div>
  </div>

export default Question4;
