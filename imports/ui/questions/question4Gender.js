import React from 'react'
import {Link} from 'react-router-dom'

const Question4 = (props) =>
  <div className="row">
    <h1> Please select your gender </h1>
    <div className="question-button-group">
      <button className="question-button" value="male" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Male </button>
      <button className="question-button" value="female" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Female </button>
    </div>
    <div className="next-button-group">
      <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>
      <Link to={`/questions/${props.next}`} className="next-button">Next</Link>
    </div>
  </div>

export default Question4;
