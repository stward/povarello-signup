import Cookies from 'js-cookie'
import { createContainer }  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js';

class Admin extends Component {
  addHandler(id) {
    People.update(
      {_id: id},
      {$set:{removed: false}}
    );
  }

  removeHandler(id) {
    People.remove(
      {_id: id}
    );
  }

  logOutHandler() {
    Cookies.remove("loggedIn")
    window.location.href = "/"
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
          <button type="button" className="btn btn-default" onClick={(id) => this.addHandler(person._id)}>
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          </button>
        </td>
        <td>
          <button type="button" className="btn btn-default" onClick={(id) => this.removeHandler(person._id)}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <h1>Register Archives</h1>
        <a href="/admin" className="btn btn-primary" role="button">Current List</a>
        <button className="btn btn-danger logOutBtn" onClick={() => this.logOutHandler()}>Log Out</button>
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
              <th>Move Back To Current List</th>
              <th>Remove Permanently</th>
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
    people: People.find({removed:true}, {sort: {createdAt: -1}}).fetch()
  };
}, Admin);
