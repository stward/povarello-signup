import React from 'react'
import {Link} from 'react-router-dom'

const Review = (props) =>
  <div className="row">
    <h1>Review your information. Does this all look right?</h1>
    <hr />
    <div>
        <p><b>Name:</b> {props.info.name} <Link to={`/questions/1`}>[Edit]</Link></p>
        <p><b>Is this your first meal this year:</b> {props.info.firstMealYear} <Link to={`/questions/2`}>[Edit]</Link></p>
        <p><b>Is this your first meal this month:</b> {props.info.firstMealMonth} <Link to={`/questions/3`}>[Edit]</Link></p>
        <p><b>Are you male or female:</b> {props.info.gender} <Link to={`/questions/4`}>[Edit]</Link></p>
        <p><b>How old are you:</b> {props.info.seniorChild} <Link to={`/questions/5`}>[Edit]</Link></p>
        <p><b>Are you currently employed:</b> {props.info.employed} <Link to={`/questions/6`}>[Edit]</Link></p>
        <p><b>Are you a veteran:</b> {props.info.veteran} <Link to={`/questions/7`}>[Edit]</Link></p>
    </div>
    <div className="question-button-group">
      <button className="submit-button" onClick={(event) => props.handleSubmit()}>Submit</button>
    </div>
    <div className="next-button-group">
      <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>
    </div>
  </div>

export default Review;
