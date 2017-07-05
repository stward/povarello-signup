import React from 'react'
import {Link} from 'react-router-dom'
import NextButtonStyle from '../NextButtonStyle'

const Review = (props) => {
return (
  <div className="review-row">
    <h1>Review your information. Does this all look right?</h1>
    <hr />
    <div>
      <div>
        <h3 className={props.info.name === null ? "invalidAnswer" : null}><b>Name:</b> <b className={props.info.name !== null ? "validAnswer" : "invalidAnswer"}>{props.info.name}</b> <Link to={'/questions/1'}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></h3>
      </div>
      <div className="infoFlexbox">
        <div>
          <h3 className={props.info.firstMealYear === null ? "invalidAnswer" : null}><b>Is this your first meal this year:</b> <b className={props.info.firstMealYear !== null ? "validAnswer" : "invalidAnswer"}>{props.info.firstMealYear}</b> <br /> <Link to={`/questions/2`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></h3>
          <h3 className={props.info.firstMealMonth === null ? "invalidAnswer" :null}><b>Is this your first meal this month:</b> <b className={props.info.firstMealMonth !== null ? "validAnswer" : "invalidAnswer"}>{props.info.firstMealMonth}</b> <br /> <Link to={`/questions/3`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></h3>
          <h3 className={props.info.gender === null ? "invalidAnswer" : null}><b>Are you male or female:</b> <b className={props.info.gender !== null ? "validAnswer" : "invalidAnswer"}>{props.info.gender}</b> <br /> <Link to={`/questions/4`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></h3>
        </div>
        <div>
          <h3 className={props.info.seniorChild === null ? "invalidAnswer" : null}><b>How old are you:</b> <b className={props.info.seniorChild !== null ? "validAnswer" : "invalidAnswer"}>{props.info.seniorChild}</b> <br /> <Link to={`/questions/5`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></h3>
          <h3 className={props.info.employed === null ? "invalidAnswer" : null}><b>Are you currently employed:</b> <b className={props.info.employed !== null ? "validAnswer" : "invalidAnswer"}>{props.info.employed}</b> <br /> <Link to={`/questions/6`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></h3>
          <h3 className={props.info.veteran === null ? "invalidAnswer" : null}><b>Are you a veteran:</b> <b className={props.info.veteran !== null ? "validAnswer" : "invalidAnswer"}>{props.info.veteran}</b> <br /> <Link to={`/questions/7`}><button onClick={() => props.editQuestion()}>[Edit]</button></Link></h3>
        </div>
      </div>
    </div>
    <div className="review-button-group">
      <button className="submitStyle" onClick={(event) => props.handleSubmit()}>Submit</button>
    </div>
    <div className="next-button-group">

    </div>
  </div>
)
}
export default Review;
