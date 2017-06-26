import Cookies from 'js-cookie'
import React from 'react'
import {Link} from 'react-router-dom'

function validatePass(e){
  e.preventDefault()
  if(document.getElementById('password').value === 'hotdogs'){
    Cookies.set('loggedIn', true)
    window.location.href = '/admin'
    return true
  } else {
    alert('Incorrect Password')
    return false
  }
}

const Passwordpage = (props) =>
  <form>
    <input className="password-input" placeholder='enter your password here' id='password' type='text'  />
    <div>
      <button type='submit' className="password-button" onClick={validatePass}> Submit </button>
    </div>
  </form>

export default Passwordpage;
