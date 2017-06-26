import Cookies from 'js-cookie'
import React from 'react'
import {Link} from 'react-router-dom'

function validatePass(){
  if(document.getElementById('password').value === 'hotdogs'){
    Cookies.set('loggedIn', true)
    window.location.href = '/admin'
    return true
  } else {
    return false
  }
}

const Passwordpage = (props) =>
  <div>
    <input className="password-input" placeholder='enter your password here' id='password' type='text'  />
    <div>
      <button className="password-button" onClick={validatePass}> Submit </button>
    </div>
  </div>

export default Passwordpage;
