import React from 'react'

const Question4 = (props) =>
  <div className="row">
    <h1> Please select your gender </h1>
    <div className="question-button-group">
      <button className="question-button" value="male" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Male </button>
      <button className="question-button" value="femail" onClick={(event) => props.onChangeHandler("gender", event.target.value)}> Female </button>
    </div>
    <div className="next-button-group">
      <a className="back-button" href={`/questions/${props.previous}`}>Back</a>
      <a className="next-button" href={`/questions/${props.next}`}>Next</a>
    </div>
  </div>

export default Question4;
