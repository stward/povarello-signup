import React from 'react'
import {Link} from 'react-router-dom'

const Question3 = (props) =>
  <div className="row">
    <h1>Is this your first meal here this month?</h1>
    <div className="question-button-group">
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealMonth", event.target.value)}>Yes</button></Link>
    : <Link to={`/questions/${props.next}`}><button className="question-button" value="yes" onClick={(event) => props.onChangeHandler("firstMealMonth", event.target.value)}>Yes</button></Link>}
    {props.info.editingQuestion === true ?
      <Link to={`/questions/8`}><button className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealMonth", event.target.value)}>No</button></Link>
    : <Link to={`/questions/${props.next}`}><button className="question-button" value="no" onClick={(event) => props.onChangeHandler("firstMealMonth", event.target.value)}>No</button></Link>}
    </div>
    <div className="next-button-group">
      {props.info.editingQuestion === true ? <Link to={`/questions/8`} className="next-button">Back</Link> : <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>}
    </div>
  </div>

export default Question3;
