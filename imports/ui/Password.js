import React from 'react'
import {Link} from 'react-router-dom'

function validatePass(){
    if(document.getElementById('password').value === 'hotdogs'){
        alert('correct!')
        window.location.href = '/admin'
        return true;
    }else{
        alert('wrong password!!');
        return false;
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
