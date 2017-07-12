import Cookies from 'js-cookie'
import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js'
import Person from './Person.js';
import $ from 'jquery'

const convertArrayOfObjectsToCSV = (args) => {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = args.data || null;

  if (data == null || !data.length) {
    return null;
  }

  data = data.filter(function(d) {
    d.archived = d.removed
    delete d._id
    delete d.removed
    return data
  })

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
      filter: null,
      currentYear: null
    }
  }

  logOutHandler() {
    Cookies.remove("loggedIn")
    window.location.href = "/"
  }

  downloadCSV(args) {
    var data, filename, link

    let filteredPeople = this.props.people
    if (this.state.filter) {
      filteredPeople = filteredPeople.filter(people => (people.createdAt > this.state.filter[0]) && (people.createdAt < this.state.filter[1]))
    }

    var csv = convertArrayOfObjectsToCSV({
      data: filteredPeople
    })
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

  showSelections = (e) => {
    e.preventDefault()
    var year = ($("#yearSelect").val())
    , startMonth = ($("#monthStartSelect").val())
    , endMonth = ($("#monthEndSelect").val())
    , startDate = new Date(year, startMonth, 1)
    , endDate = new Date(year, endMonth, 31)
    this.setState({filter: [startDate, endDate]})
  }

  renderPeople() {
    let filteredPeople = this.props.people
    if (this.state.filter) {
      filteredPeople = filteredPeople.filter(people => (people.createdAt > this.state.filter[0]) && (people.createdAt < this.state.filter[1]))
    }
    if (filteredPeople && filteredPeople.length > 0) {
      $("#download").show()
      return filteredPeople.map((person) => (
        <Person key={person._id} id={person._id} person={person} />
      ))
    } else {
      $("#download").hide()
      return (
        <tr>
          <td colSpan={9}><h2>No Results Found</h2></td>
        </tr>
      )
    }
  }

  nextMonthLoader = (e) => {
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var monthEndSelections = []
    for (var i = e.target.value; i < months.length; i++) {
      monthEndSelections.push("<option value=" + i + ">" + months[i] + "</>")
    }
    $("#monthEndSelect").html(monthEndSelections)
  }

  dateSelectLoader() {
    function isDateInArray(person, yearArray) {
      for (var i = 0; i < yearArray.length; i++) {
        if (person.getFullYear() === yearArray[i]) {
          return true;
        }
      }
      return false;
    }
    var people = this.props.people
    var uniqueYears = []
    var yearSelect = []
    for (var i = 0; i < people.length; i++) {
      if (!isDateInArray(people[i].createdAt, uniqueYears)) {
        uniqueYears.push(people[i].createdAt.getFullYear())
        yearSelect.push("<option value=" + people[i].createdAt.getFullYear() + ">" + people[i].createdAt.getFullYear() + "</option>")
      }
    }
    if (!this.state.currentYear) {
      $("#yearSelect").html(yearSelect)
    }
  }

  currentYearSetter = (e) => {
    this.setState({currentYear: e.target.value})
  }

  render() {
    if (Cookies.get('loggedIn')) {

      this.dateSelectLoader()

      return (
        <div>
          <h1>New Registers</h1>
          <a href="/adminDailyReport" className="btn btn-primary" role="button">Daily Report</a>
          <a href="/adminArchive" className="btn btn-primary marginLeftBtn" role="button">Archive</a>
          <button className="btn btn-danger marginLeftBtn" onClick={() => this.logOutHandler()}>Log Out</button>
          <form onSubmit={this.showSelections.bind(this)} className="width25pct centerDiv">
            <div className="form-group">
              <label htmlFor="yearSelect">Year</label>
              <select id="yearSelect" className="form-control" required onChange={this.currentYearSetter}>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="monthStartSelect">Starting Month</label>
              <select id="monthStartSelect" className="form-control" required onChange={this.nextMonthLoader}>
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
              <select id="monthEndSelect" className="form-control" required>
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
            <button type="submit" id="searchResults" className="btn btn-default">Submit</button>
          </form>
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
          <a id="download" className="btn btn-lg btn-primary" onClick={this.downloadCSV({ filename: "people-data.csv" })}>Export</a>
        </div>
      )
    } else {
      return (
        window.location.href = "/password"
      )
    }
  }
}

Admin.propTypes = {
  people: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    people: People.find({removed:false}, {sort: {createdAt: -1}}).fetch()
  };
}, Admin);
