import React from 'react'

const Question3 = (props) =>
  <div className="row">
    <h1>Is this your first meal here this month?</h1>
    <div className="question-button-group">
      <button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealMonth", event.target.value)}>Yes</button>
      <button className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealMonth", event.target.value)}>No</button>
    </div>
    <div className="next-button-group">
      <a className="back-button" href={`/questions/${props.previous}`}>Back</a>
      <a className="next-button" href={`/questions/${props.next}`}>Next</a>
    </div>
  </div>

export default Question3;
