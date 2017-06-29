import React from 'react'
import {Link} from 'react-router-dom'

const Splash = (props) =>
  <div>
    <h1 className="welcome-label">Welcome to the Poverello Center</h1>
    <div className="start-button-container">
      <Link to={`/questions/1`} className="start-button">Start Here</Link>
    </div>
  </div>

export default Splash;
