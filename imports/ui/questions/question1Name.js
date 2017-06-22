import React from 'react'

const Question1 = (props) =>
  <div className="row">
    <h1>Please enter your name</h1>
    <div className="question-button-group">
      <input className="form-control" type="text" placeholder="Enter Your Name Here" onChange={(event) => props.onChangeHandler("name", event.target.value)} />
    </div>
    <div className="next-button-group">
      <a className="next-button" href={`/questions/${props.next}`}>Next</a>
    </div>
  </div>

export default Question1;
