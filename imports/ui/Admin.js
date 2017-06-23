import { createContainer }  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js';

class Admin extends Component {
  renderPeople() {
    let filteredPeople = this.props.people;
    return filteredPeople.map((person) => (
      <tr>
        <td>{person.name}</td>
        <td>{person.firstMealYear}</td>
        <td>{person.firstMealMonth}</td>
        <td>{person.gender}</td>
        <td>{person.seniorChild}</td>
        <td>{person.employed}</td>
        <td>{person.veteran}</td>
      </tr>
    ));
  }

  render() {
    return (
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Name</th>
            <th>First Meal This Year</th>
            <th>First Meal This Month</th>
            <th>Gender</th>
            <th>Age Group</th>
            <th>Employed</th>
            <th>Veteran</th>
          </tr>
          {this.renderPeople()}
        </tbody>
      </table>
    )
  }
}

export default createContainer(() => {
  return {
    people: People.find({}).fetch()
  };
}, Admin);
