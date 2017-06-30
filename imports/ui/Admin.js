import Cookies from 'js-cookie'
import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js'
import $ from 'jquery'

const convertArrayOfObjectsToCSV = (args) => {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = args.data || null;

  if (data == null || !data.length) {
    return null;
  }

  columnDelimiter = args.columnDelimiter || ',';
  lineDelimiter = args.lineDelimiter || '\n';

  keys = Object.keys(data[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach(function(item) {
    ctr = 0;
    keys.forEach(function(key) {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: this.props.people,
      thing: null
    }
  }

  deleteHandler(id) {
    People.update(
      {_id: id},
      {$set:{removed: true}}
    );
  }

  logOutHandler() {
    Cookies.remove("loggedIn")
    window.location.href = "/"
  }

  downloadCSV(args) {
    var data, filename, link;
    var csv = convertArrayOfObjectsToCSV({
      data: this.props.people
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.getElementById('download');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
  }

  showSelections() {
    var year = ($("#yearSelect").val())
    var startMonth = ($("#monthStartSelect").val())
    var endMonth = ($("#monthEndSelect").val())
    this.setState({people: this.props.people, thing: 'test'})
    let filteredPeople = this.state.people
    function findBob(filteredPeople) {
      return filteredPeople.createdAt > 2015;
    }
    var startDate = new Date(year, startMonth, '00')
    console.log(startDate)
    var bobName = filteredPeople.find(findBob)
    this.setState({people: [{
      createdAt:"12/31/2014",
      employed:"no",
      firstMealMonth:null,
      firstMealYear:"yes",
      gender:"male",
      name:"Bob Jones",
      removed:false,
      seniorChild:"adult",
      veteran:"no"
    }]})
    console.log(bobName);
    console.log(this.state)
  }

  renderPeople() {
    if (this.state.people.length > 0) {
      let filteredPeople = this.state.people
      return filteredPeople.map((person) => (
        <tr>
          <td>{person.createdAt.toString()}</td>
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
      ))
    } else {
      let filteredPeople = this.props.people
      for (i in filteredPeople) {
        date = filteredPeople[i].createdAt
        year = date.getFullYear()
        month = date.getMonth()+1
        dt = date.getDate()
        filteredPeople[i].createdAt = month + '/' + dt + '/' + year
      }
      return filteredPeople.map((person) => (
        <tr>
          <td>{person.createdAt.toString()}</td>
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
      ))
    }
  }

  render() {
    if (Cookies.get('loggedIn')) {
      return (
        <div>
          <h1>New Registers</h1>
          <a href="/adminArchive" className="btn btn-primary" role="button">Archive</a>
          <button className="btn btn-danger logOutBtn" onClick={() => this.logOutHandler()}>Log Out</button>
          <div className="form-group">
            <label htmlFor="yearSelect">Year</label>
            <select id="yearSelect">
              <option value="">- Select -</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="monthStartSelect">Starting Month</label>
            <select id="monthStartSelect">
              <option value="">- Select -</option>
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="monthEndSelect">Ending Month</label>
            <select id="monthEndSelect">
              <option value="">- Select -</option>
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
          </div>
          <button id="searchResults" className="btn btn-default" onClick={() => this.showSelections()}>Submit</button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Registered</th>
                <th>Name</th>
                <th>First Meal This Year</th>
                <th>First Meal This Month</th>
                <th>Gender</th>
                <th>Age Group</th>
                <th>Employed</th>
                <th>Veteran</th>
                <th>Move To Archive</th>
              </tr>
            </thead>
            <tbody>
              {this.renderPeople()}
            </tbody>
          </table>
          <a id='download' onClick={this.downloadCSV({ filename: "people-data.csv" })}>Export</a>
        </div>
      )
    } else {
      return (
        window.location.href = "/password"
      )
    }
  }
}

export default createContainer(() => {
  return {
    people: People.find({removed:false}, {sort: {createdAt: -1}}).fetch()
  };
}, Admin);
