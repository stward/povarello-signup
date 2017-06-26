import React from 'react'
import {Link} from 'react-router-dom'

const Question1 = (props) =>
  <div className="row">
    <h1>Please enter your first and last name</h1>
    <div className="question-button-group">
      <input className="form-control" type="text" placeholder="Enter Your FIRST and LAST Name Here" onChange={(event) => props.onChangeHandler("name", event.target.value)} />
    </div>
    <div>
      <Link to={`/questions/${props.next}`} className="next-button">Next</Link>
    </div>
  </div>

export default Question1;
