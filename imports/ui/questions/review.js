import React from 'react'
import {Link} from 'react-router-dom'

const Review = (props) =>
  <div className="row">
    <h1>Review your information. Does this all look right?</h1>
    <div>
        <li>{props.info.name}</li>
        <li>{props.info.firstMealYear}</li>
        <li>{props.info.firstMealMonth}</li>
        <li>{props.info.gender}</li>
        <li>{props.info.seniorChild}</li>
        <li>{props.info.employed}</li>
        <li>{props.info.veteran}</li>
    </div>
    <div className="question-button-group">
      <button className="submit-button" onClick={(event) => props.handleSubmit()}>Submit</button>
    </div>
    <div className="next-button-group">
      <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>
    </div>
  </div>

export default Review;
