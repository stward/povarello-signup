import {createContainer}  from 'meteor/react-meteor-data'
import {People} from '../api/people.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import React, {Component, PropTypes} from 'react'


export default class Person extends Component {

  deleteHandler() {
    People.update(this.props.id, {
      $set: {removed: true}
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.person.createdAt.toDateString()}</td>
        <td>{this.props.person.name}</td>
        <td>{this.props.person.firstMealYear}</td>
        <td>{this.props.person.firstMealMonth}</td>
        <td>{this.props.person.gender}</td>
        <td>{this.props.person.seniorChild}</td>
        <td>{this.props.person.employed}</td>
        <td>{this.props.person.veteran}</td>
        {/*
          <td>
            <button type="button" className="btn btn-default" onClick={this.deleteHandler.bind(this)}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </td>
        */}
      </tr>
    )
  }
}

Person.propTypes = {
  person: PropTypes.object.isRequired
}
