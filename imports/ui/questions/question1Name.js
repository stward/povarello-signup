import React from 'react'
import {Link} from 'react-router-dom'
import NextButtonStyle from '../NextButtonStyle'

const nextStyle = {
  display: 'flex',
  fontSize: '300%',
  justifyContent: 'center',
  padding: 50,
  background: '#5cff59',
  borderRadius: 20,
  border: 'solid white 5px',
  color: 'black',
  width: '30%'
}

const textInput = {
  display: 'flex',
  textAlign: 'center'
}

//all these question pages are fairly simple, just react chunks that are each page.
//they all render in app.jsx.

const Question1 = (props) =>{
console.log(props)
return (
  <div>
    <div className="row">
      <h1 className="welcome-label">Please enter your name</h1>
      <div className="question-button-group">
        <input style={textInput} className="form-control" type="text" placeholder="Name Here" onChange={(event) => props.onChangeHandler("name", event.target.value)} />
      </div>
    </div>
    <div className="flex-name-row">
      {props.info.editingQuestion === true ?
        <div>
          <Link to={`/questions/8`} style={nextStyle}>Return to Review</Link>
        </div>
      : <Link to={`/questions/${props.next}`} style={nextStyle}>Next</Link>}
    </div>
  </div>
)}

export default Question1;
