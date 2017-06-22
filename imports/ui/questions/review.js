import React from 'react'

const Review = () =>
  <div className="row">
    <h1>Review your information. Does this all look right?</h1>
    <div>
        <li>name</li>
        <li>gender</li>
        <li>first meal year</li>
        <li>first meal month</li>
        <li>age</li>
        <li>employed</li>
        <li>veteran</li>
    </div>
    <div className="question-button-group">
      <button className="question-button">Submit</button>
    </div>
    <div className="next-button-group">
      <a className="back-button" href={`/questions/${props.previous}`}>Back</a>
    </div>
  </div>

export default Review;
