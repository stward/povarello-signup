import React, {Component, PropTypes} from 'react'
import Question1 from './questions/question1Name'
import Question2 from './questions/question2FirstMealYear'
import Question3 from './questions/question3FirstMealMonth'
import Question4 from './questions/question4Gender'
import Question5 from './questions/question5SeniorChild'
import Question6 from './questions/question6Employed'
import Question7 from './questions/question7Veteran'
import Review from './questions/review'
import QuestionTally from './QuestionTally'
import {People} from '../api/people.js';

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
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      firstMealYear: null,
      firstMealMonth: null,
      gender: null,
      seniorChild: null,
      employed: null,
      veteran: null
    }
  }

  onChangeHandler(field, value) {
    var newData = {}
    newData[field] = value
    if (field === "firstMealYear" && value === "yes") {
      newData["firstMealMonth"] = "no"
    }
    this.setState(newData)
  }

  handleSubmit() {
    People.insert({
      createdAt: new Date(),
      name: this.state.name,
      firstMealYear: this.state.firstMealYear,
      firstMealMonth: this.state.firstMealMonth,
      gender: this.state.gender,
      seniorChild: this.state.seniorChild,
      employed: this.state.employed,
      veteran: this.state.veteran,
      removed: false
    }),
    window.location.href = "/thankYou";
  }

  render() {
    const questionNum = (this.props.match.params.id ? this.props.match.params.id : 1)
    const next = Number(questionNum) + 1
    const previous = (this.state.firstMealYear === "yes" ? Number(questionNum) - 2 : Number(questionNum) - 1)
    const ActiveQuestion = questions[questionNum]
    console.log(this.state)
    return (
      <ActiveQuestion
        onChangeHandler={this.onChangeHandler.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
        next={next}
        previous={previous}
        info={this.state}
      />
    )
  }
}

export default QuestionContainer
