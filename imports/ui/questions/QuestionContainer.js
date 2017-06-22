import React, {Component, PropTypes} from 'react'
import Question1 from './question1Name'
import Question2 from './question2FirstMealYear'
import Question3 from './question3FirstMealMonth'
import Question4 from './question4Gender'
import Question5 from './question5SeniorChild'
import Question6 from './question6Employed'
import Question7 from './question7Veteran'
import Review from './review'
import QuestionTally from './QuestionTally'

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
    this.setState(newData)
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    const questionNum = (this.props.match.params.id ? this.props.match.params.id : 1)
    const next = Number(questionNum) + 1
    const previous = Number(questionNum) - 1
    const ActiveQuestion = questions[questionNum]
    return (
      <ActiveQuestion onChangeHandler={this.onChangeHandler.bind(this)} onSubmit={this.handleSubmit.bind(this)} next={next} previous={previous} />
    )
  }
}

export default QuestionContainer
