import React from 'react'
import {Link} from 'react-router-dom'

const Question3 = (props) =>
  <div className="row">
    <h1>Is this your first meal here this month?</h1>
    <div className="question-button-group">
      <Link to={`/questions/${props.next}`}><button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealMonth", event.target.value)}>Yes</button></Link>
      <Link to={`/questions/${props.next}`}><button className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealMonth", event.target.value)}>No</button></Link>
    </div>
    <div className="next-button-group">
      <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>
    </div>
  </div>

export default Question3;
