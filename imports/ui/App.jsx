import { createContainer }  from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Splash from './questions/splash'
import QuestionContainer from './QuestionContainer'
import Question1 from './questions/question1Name'
import Question2 from './questions/question2FirstMealYear'
import Question3 from './questions/question3FirstMealMonth'
import Question4 from './questions/question4Gender'
import Question5 from './questions/question5SeniorChild'
import Question6 from './questions/question6Employed'
import Question7 from './questions/question7Veteran'
import Review from './questions/review'

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <div className="row main-header">
          <img className="header-image" src="http://www.thepoverellocenter.org/wp-content/themes/poverello/library/images/poverello-logo.png"/>
        </div>
        <div>
          <Link to='/'>splash</Link>
          <Link to='/questions/1'>q1</Link>
          <Link to='/questions/2'>q2</Link>
          <Link to='/questions/3'>q3</Link>
          <Link to='/questions/4'>q4</Link>
          <Link to='/questions/5'>q5</Link>
          <Link to='/questions/6'>q6</Link>
          <Link to='/questions/7'>q7</Link>
          <Link to='/questions/8'>review</Link>
        </div>

        <Route exact path='/' component={Splash} />
        <Route path='/questions/:id' component={QuestionContainer} />
      </div>
    </Router>
    );
  }
}

export default createContainer(() => {
  return {};
}, App);
