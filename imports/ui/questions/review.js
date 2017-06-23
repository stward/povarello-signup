import React from 'react'
import {Link} from 'react-router-dom'

const Review = (props) =>
  <div className="row">
    <h1>Review your information. Does this all look right?</h1>
    <hr />
    <div>
        <p><b>Name:  </b>{props.info.name}</p>
        <p><b>Is this your first meal this year:  </b>{props.info.firstMealYear}</p>
        <p><b>Is this your first meal this month:  </b>{props.info.firstMealMonth}</p>
        <p><b>Are you male or female:  </b>{props.info.gender}</p>
        <p><b>How old are you:  </b>{props.info.seniorChild}</p>
        <p><b>Are you currently employed:  </b>{props.info.employed}</p>
        <p><b>Are you a veteran:  </b>{props.info.veteran}</p>
    </div>
    <div className="question-button-group">
      <button className="submit-button" onClick={(event) => props.handleSubmit()}>Submit</button>
    </div>
    <div className="next-button-group">
      <Link to={`/questions/${props.previous}`} className="back-button">Back</Link>
    </div>
  </div>

export default Review;
