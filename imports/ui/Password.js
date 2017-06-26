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
  <div>
    <input placeholder='enter your password here' id='password' type='text'  />
    <div>
      <button className="pass-button" onClick={validatePass}> the password is hotdogs </button>
    </div>
  </div>

export default Passwordpage;
