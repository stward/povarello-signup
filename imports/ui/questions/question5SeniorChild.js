import React from 'react'
import {Link} from 'react-router-dom'

const Question5 = (props) =>
  <div className="row">
    <h1>Select your age group. Child is under 18, Senior is over 55.</h1>
    <div className="question-button-group">
      <Link to={`/questions/${props.next}`}><button className="question-button" value="child" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}>Child</button></Link>
      <Link to={`/questions/${props.next}`}><button className="question-button" value="adult" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}>Adult</button></Link>
      <Link to={`/questions/${props.next}`}><button className="question-button" value="senior" onClick={(event) => props.onChangeHandler("seniorChild", event.target.value)}>Senior</button></Link>
    </div>
    <div className="next-button-group">
      <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>
    </div>
  </div>

export default Question5;
