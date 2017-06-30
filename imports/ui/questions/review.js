import React from 'react'
import {Link} from 'react-router-dom'

const Review = (props) => {
return (
  <div className="row">
    <h1>Review your information. Does this all look right?</h1>
    <hr />
    <div>
        <p><b>Name:</b> {props.info.name} <Link to={'/questions/1'}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></p>
        <p><b>Is this your first meal this year:</b> {props.info.firstMealYear} <Link to={`/questions/2`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></p>
        <p><b>Is this your first meal this month:</b> {props.info.firstMealMonth} <Link to={`/questions/3`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></p>
        <p><b>Are you male or female:</b> {props.info.gender} <Link to={`/questions/4`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></p>
        <p><b>How old are you:</b> {props.info.seniorChild} <Link to={`/questions/5`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></p>
        <p><b>Are you currently employed:</b> {props.info.employed} <Link to={`/questions/6`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></p>
        <p><b>Are you a veteran:</b> {props.info.veteran} <Link to={`/questions/7`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></p>
    </div>
    <div className="question-button-group">
      <button className="submit-button" onClick={(event) => props.handleSubmit()}>Submit</button>
    </div>
    <div className="next-button-group">
      <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>
    </div>
  </div>
)
}
export default Review;
