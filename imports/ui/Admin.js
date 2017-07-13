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
    delete d._id
    delete d.removed
    return data
  })

  columnDelimiter = args.columnDelimiter || ','
  lineDelimiter = args.lineDelimiter || '\n'

  keys = Object.keys(data[0])

  result = ''
  result += keys.join(columnDelimiter)
  result += lineDelimiter

  data.forEach(function(item) {
    ctr = 0;
    keys.forEach(function(key) {
      if (ctr > 0) result += columnDelimiter

      result += item[key]
      ctr++
    })
    result += lineDelimiter
  })

  return result
}

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(1,'months'),
      endDate: moment()
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

  resetDates() {
    this.setState({
      startDate: moment().subtract(1,'months'),
      endDate: moment()
    })
  }

  logOutHandler() {
    Cookies.remove("loggedIn")
    window.location.href = "/"
  }

  downloadCSV(args) {
    var data, filename, link

    let p = this.props.people
    if (this.state.startDate) {
      let start = this.state.startDate
      let end = this.state.endDate
      p = p.filter(function(person) {
        return person.createdAt >= start && person.createdAt <= end
      })
    }
    var csv = convertArrayOfObjectsToCSV({
      data: p
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

  renderPeople() {
    let p = this.props.people
    if (this.state.startDate) {
      let start = this.state.startDate
      let end = this.state.endDate
      p = p.filter(function(person) {
        return person.createdAt >= start && person.createdAt <= end
      })
    }
    if (p && p.length > 0) {
      $("#download").show()
      return p.map((person) => (
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
          <h1>Registers</h1>
          <label htmlFor="monthStartSelect">Start Date</label>
          <DatePicker id="monthStartSelect" className="datePicker" required
            selected={this.state.startDate}
            onChange={this.handleStartChange.bind(this)}
          />
          <label htmlFor="monthEndSelect">End Date</label>
          <DatePicker id="monthEndSelect" className="datePicker" required
            selected={this.state.endDate}
            onChange={this.handleEndChange.bind(this)}
          />
          <div className="height15px"></div>
          <button className="btn btn-primary" onClick={() => this.resetDates()}>Reset</button>
          <a href="/adminDailyReport" className="btn btn-primary marginLeftBtn" role="button">Daily Report</a>
          {/* <a href="/adminArchive" className="btn btn-primary marginLeftBtn" role="button">Archive</a> */}
          <button className="btn btn-danger marginLeftBtn" onClick={() => this.logOutHandler()}>Log Out</button>
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
                {/* <th>Move To Archive</th> */}
              </tr>
            </thead>
            <tbody>
              {this.renderPeople()}
            </tbody>
          </table>
          <a id="download" className="btn btn-lg btn-primary" onClick={this.downloadCSV({ filename: "Poverello-Registers.csv" })}>Export</a>
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
