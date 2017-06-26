import { createContainer }  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js';

class Admin extends Component {
  deleteHandler(id) {
    People.update(
      {_id: id},
      {$set:{removed: false}}
    );
  }

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
        <td>
          <button type="button" className="btn btn-default" onClick={(id) => this.deleteHandler(person._id)}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <a href="/admin">Current List</a>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>First Meal This Year</th>
              <th>First Meal This Month</th>
              <th>Gender</th>
              <th>Age Group</th>
              <th>Employed</th>
              <th>Veteran</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderPeople()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    people: People.find({removed:true}).fetch()
  };
}, Admin);
