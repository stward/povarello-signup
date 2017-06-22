import React from 'react'
import {Link} from 'react-router-dom'

const Splash = (props) =>
  <div className="row">
    <h1>Welcome to the Poverello Center</h1>
    <div className="next-button-group">
      <Link to={`/questions/${props.next}`} className="next-button">Start Here</Link>
    </div>
  </div>

export default Splash;
