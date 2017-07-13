import Cookies from 'js-cookie'
import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js'
import Person from './Person.js'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
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
      startDate: null,
      endDate: null
    }
  }

  handleStartChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleEndChange(date) {
    this.setState({
      endDate: date
    })
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
    this.setState({filter: [this.state.startDate, this.state.endDate]})
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

  render() {
    if (Cookies.get('loggedIn')) {

      return (
        <div>
          <h1>New Registers</h1>
          <a href="/adminDailyReport" className="btn btn-primary" role="button">Daily Report</a>
          <a href="/adminArchive" className="btn btn-primary marginLeftBtn" role="button">Archive</a>
          <button className="btn btn-danger marginLeftBtn" onClick={() => this.logOutHandler()}>Log Out</button>
          <form onSubmit={this.showSelections.bind(this)} className="width25pct centerDiv">
            <div className="form-group">
              <label htmlFor="monthStartSelect">Start Date</label>
              <DatePicker id="monthStartSelect" className="datePicker" required
                selected={this.state.startDate}
                onChange={this.handleStartChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="monthEndSelect">End Date</label>
              <DatePicker id="monthEndSelect" className="datePicker" required
                selected={this.state.endDate}
                onChange={this.handleEndChange.bind(this)}
              />
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
