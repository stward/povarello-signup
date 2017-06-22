import React from 'react'

const Question7 = (props) =>
  <div className="row">
    <h1>Are you a veteran?</h1>
    <div className="question-button-group">
      <button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("veteran", event.target.value)}>Yes</button>
      <button className="question-button" value="no" onClick={(event) => props.onChangeHandler("veteran", event.target.value)}>No</button>
    </div>
    <div className="next-button-group">
      <a className="back-button" href={`/questions/${props.previous}`}>Back</a>
      <a className="next-button" href={`/questions/${props.next}`}>Next</a>
    </div>
  </div>

export default Question7;
