import React from 'react'
import {Link} from 'react-router-dom'

const style = {
  display: 'flex',
  margin: 40,
  fontSize: 90,
  padding: 80,
  background: '#5cff59',
  borderRadius: 20,
  border: 'solid white 5px',
  color: 'black'
}

const Splash = (props) =>
  <div>
    <h1 className="welcome-label">Welcome to the Poverello Center</h1>
      <div className="start-button-container">
          <Link to={`/questions/1`}><button style={style}>Start Here</button></Link>
      </div>
  </div>

export default Splash;
