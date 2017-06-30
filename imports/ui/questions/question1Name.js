import React from 'react'
import {Link} from 'react-router-dom'

const Question1 = (props) =>{
console.log(props)
return (
  <div className="row">
    <h1 className="welcome-label">Please enter your name</h1>
    <div className="question-button-group">
      <input className="form-control" type="text" placeholder="Enter Your FIRST and LAST Name Here" onChange={(event) => props.onChangeHandler("name", event.target.value)} />
    </div>
    <div className="next-button-group">
      {props.info.editingQuestion === true ?
        <div>
          <Link to={`/questions/8`} className="next-button">submit</Link>
          <Link to={`/questions/8`} className="next-button">Back</Link>
        </div>
      : <Link to={`/questions/${props.next}`} className="next-button">Next</Link>}
    </div>
  </div>
)}

export default Question1;
