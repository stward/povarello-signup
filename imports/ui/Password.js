import Cookies from 'js-cookie'
import React from 'react'
import {Link} from 'react-router-dom'

const style = {
  fontSize: 50,
  padding: 50,
  background: '#5cff59',
  borderRadius: 20,
  border: 'solid white 5px',
  color: 'black'
}

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
      <button type='submit' style={style} onClick={validatePass}> Submit </button>
    </div>
  </form>

export default Passwordpage;
