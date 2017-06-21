import { createContainer }  from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Question1 from './questions/question1Name'
import Question2 from './questions/question2FirstMealYear'
import Question3 from './questions/question3FirstMealMonth'
import Question4 from './questions/question4Gender'
import Question5 from './questions/question5SeniorChild'
import Question6 from './questions/question6Employed'
import Question7 from './questions/question7Veteran'
import Review from './questions/review'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <Router>
      <div>
        <div className="row main-header">
          <img className="header-image" src="http://www.thepoverellocenter.org/wp-content/themes/poverello/library/images/poverello-logo.png"/>
        </div>
        <div>
          <Link to='/'>q1</Link>
          <Link to='/q2'>q2</Link>
          <Link to='/q3'>q3</Link>
          <Link to='/q4'>q4</Link>
          <Link to='/q5'>q5</Link>
          <Link to='/q6'>q6</Link>
          <Link to='/q7'>q7</Link>
          <Link to='/review'>review</Link>
        </div>

        <Route exact path='/' component={Question1}/>
        <Route exact path='/q2' component={Question2}/>
        <Route exact path='/q3' component={Question3}/>
        <Route exact path='/q4' component={Question4}/>
        <Route exact path='/q5' component={Question5}/>
        <Route exact path='/q6' component={Question6}/>
        <Route exact path='/q7' component={Question7}/>
        <Route exact path='/review' component={Review}/>
      </div>
    </Router>
    );
  }
}

export default createContainer(() => {
  return {};
}, App);
