import React from 'react'

const Question1 = () =>
  <div className="row">
    <h1>Please enter your name</h1>
    <div className="question-button-group">
      <input className="form-control" type="text" placeholder="Enter Your Name Here" />
    </div>
    <div className="next-button-group">
      <button className="back-button">Back</button>
      <button className="next-button">Next</button>
    </div>
  </div>

export default Question1;
