import React, {Component, PropTypes} from 'react';
import Question1 from './question1Name'
import Question2 from './question2FirstMealYear'
import Question3 from './question3FirstMealMonth'
import Question4 from './question4Gender'
import Question5 from './question5SeniorChild'
import Question6 from './question6Employed'
import Question7 from './question7Veteran'
import Review from './review'

const questions = {
  '1': Question1,
  '2': Question2,
  '3': Question3,
  '4': Question4,
  '5': Question5,
  '6': Question6,
  '7': Question7,
  '8': Review
}

class QuestionContainer extends Component {
  onChangeHandler() {

  }

  render() {
    const questionNum = this.props.match.params.id
    const ActiveQuestion = questions[questionNum]
    return (
      <ActiveQuestion />
    )
  }
}

export default QuestionContainer;
