import Cookies from 'js-cookie'
import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component, PropTypes} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

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
import Admin from './Admin'
import AdminArchive from './AdminArchive'
import AdminDailyReport from './AdminDailyReport'
import Passwordpage from './Password'
import ThankYou from './ThankYou'

class App extends Component {
  render() {
    if (Cookies.get('loggedIn')) {
      var adminLink = "/admin"
    } else {
      var adminLink = "/password"
    }
    return (
      <Router>
        <div>
          <div className="row main-header">
            <Link to="/"><img className="header-image" src="http://www.thepoverellocenter.org/wp-content/themes/poverello/library/images/poverello-logo.png"/></Link>
          </div>

          <Route exact path='/' component={Splash} />
          <Route path='/questions/:id' component={QuestionContainer} />
          <Route path='/admin' component={Admin} />
          <Route path='/adminArchive' component={AdminArchive} />
          <Route path='/adminDailyReport' component={AdminDailyReport} />
          <Route path='/password' component={Passwordpage} />
          <Route path='/thankYou' component={ThankYou} />
        </div>
      </Router>
    );
  }
}

export default createContainer(() => {
  return {};
}, App);
