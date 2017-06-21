import { createContainer }  from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Question1 from './questions/question1Name'
import Question2 from './questions/question2FirstMealYear'
import Question3 from './questions/question3FirstMealMonth'
import Question4 from './questions/question4Gender'
import Question5 from './questions/question5SeniorChild'
import Question6 from './questions/question6Employed'
import Question7 from './questions/question7Veteran'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row main-header">
          <img className="header-image" src="http://www.thepoverellocenter.org/wp-content/themes/poverello/library/images/poverello-logo.png"/>
        </div>
        <Question1 />
        <Question2 />
        <div className="height30px"></div>
        <Question3 />
        <div className="height30px"></div>
        <Question4 />
        <div className="height30px"></div>
        <Question5 />
        <div className="height30px"></div>
        <Question6 />
        <div className="height30px"></div>
        <Question7 />
        <div className="row">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  return {};
}, App);
