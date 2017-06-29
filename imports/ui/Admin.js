import Cookies from 'js-cookie'
import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js';

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

  onDownloadClick(e) {
    e.preventDefault()
    this.downloadCSV({ filename: "stock-data.csv" })
  }

  renderPeople() {
    let filteredPeople = this.props.people
    var date = new Date('2017, 06, 27');
    var test = filteredPeople.filter(function(person){
      return person.createdAt > date
    })
    console.log(test)
    for (i in filteredPeople) {
      date = filteredPeople[i].createdAt
      year = date.getFullYear()
      month = date.getMonth()+1
      dt = date.getDate();
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
    ));
  }

  render() {
    if (Cookies.get('loggedIn')) {
      return (
        <div>
          <h1>New Registers</h1>
          <a href="/adminArchive" className="btn btn-primary" role="button">Archive</a>
          <button className="btn btn-danger logOutBtn" onClick={() => this.logOutHandler()}>Log Out</button>
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
          <a id='download' onClick={this.downloadCSV({ filename: "stock-data.csv" })}>Download CSV</a>
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
