import Cookies from 'js-cookie'
import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js'
import AdminDailyPerson from './AdminDailyPerson.js';
import $ from 'jquery'

const convertArrayOfObjectsToCSV = (args) => {
  var result, ctr, columnDelimiter, lineDelimiter, data

  data = args.data || null

  if (data == null || !data.length) {
    return null
  }

  columnDelimiter = args.columnDelimiter || ','
  lineDelimiter = args.lineDelimiter || '\n'

  result = ''

  data.forEach(function(item) {
    item.forEach(function(i) {
      ctr = 0
      for (var k in i){
        if (i.hasOwnProperty(k)) {
          if (ctr > 0) result += columnDelimiter
          result += i[k]
          ctr++
        }
      }
      result += lineDelimiter
    })
    result += lineDelimiter
  })

  return result
}

class AdminDailyReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleData: null,
      startDate: moment().subtract(1,'d'),
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
      startDate: moment().subtract(1,'d'),
      endDate: moment()
    })
  }

  logOutHandler() {
    Cookies.remove("loggedIn")
    window.location.href = "/"
  }

  downloadCSV(args) {
    var data, filename, link;

    let start = this.state.startDate
    let end = this.state.endDate
    let p = this.props.people

    p = p.filter(function(person) {
      return person.createdAt >= start && person.createdAt <= end
    })

    let peopleArray = []

    for (i in p) {

      let male = {total:0, senior:0, adult:0, child:0, employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , maleSenior = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , maleAdult = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , maleChild = {firstMealYear:0, firstMealMonth:0}

      let female = {total:0, senior:0, adult:0, child:0, employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , femaleSenior = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , femaleAdult = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , femaleChild = {firstMealYear:0, firstMealMonth:0}

      if (p[i].gender === "male") {
        male.total += 1
        if (p[i].seniorChild === "senior") {
          male.senior += 1
          if (p[i].employed === "yes") {
            maleSenior.employed += 1
          }
          if (p[i].veteran === "yes") {
            maleSenior.veteran += 1
          }
          if (p[i].firstMealYear === "yes") {
            maleSenior.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            maleSenior.firstMealMonth += 1
          }
        } else if (p[i].seniorChild === "adult") {
          male.adult += 1
          if (p[i].employed === "yes") {
            maleAdult.employed += 1
          }
          if (p[i].veteran === "yes") {
            maleAdult.veteran += 1
          }
          if (p[i].firstMealYear === "yes") {
            maleAdult.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            maleAdult.firstMealMonth += 1
          }
        } else if (p[i].seniorChild === "child") {
          male.child += 1
          if (p[i].firstMealYear === "yes") {
            maleChild.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            maleChild.firstMealMonth += 1
          }
        }
        if (p[i].employed === "yes") {
          male.employed += 1
        }
        if (p[i].veteran === "yes") {
          male.veteran += 1
        }
        if (p[i].firstMealYear === "yes") {
          male.firstMealYear += 1
        }
        if (p[i].firstMealMonth === "yes") {
          male.firstMealMonth += 1
        }
      } else if (p[i].gender === "female") {
        female.total += 1
        if (p[i].seniorChild === "senior") {
          female.senior += 1
          if (p[i].employed === "yes") {
            femaleSenior.employed += 1
          }
          if (p[i].veteran === "yes") {
            femaleSenior.veteran += 1
          }
          if (p[i].firstMealYear === "yes") {
            femaleSenior.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            femaleSenior.firstMealMonth += 1
          }
        } else if (p[i].seniorChild === "adult") {
          female.adult += 1
          if (p[i].employed === "yes") {
            femaleAdult.employed += 1
          }
          if (p[i].veteran === "yes") {
            femaleAdult.veteran += 1
          }
          if (p[i].firstMealYear === "yes") {
            femaleAdult.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            femaleAdult.firstMealMonth += 1
          }
        } else if (p[i].seniorChild === "child") {
          female.child += 1
          if (p[i].firstMealYear === "yes") {
            femaleChild.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            femaleChild.firstMealMonth += 1
          }
        }
        if (p[i].employed === "yes") {
          female.employed += 1
        }
        if (p[i].veteran === "yes") {
          female.veteran += 1
        }
        if (p[i].firstMealYear === "yes") {
          female.firstMealYear += 1
        }
        if (p[i].firstMealMonth === "yes") {
          female.firstMealMonth += 1
        }
      }
      let peopleData = [
        {Created:p[i].createdAt.toDateString(), Male:"Male", Female:"Female", "Male Senior":"Male Senior", "Female Senior":"Female Senior", "Male Adult":"Male Adult", "Female Adult":"Female Adult", "Male Child":"Male Child", "Female Child":"Female Child"},
        {"":"Total", Male:male.total, Female:female.total, "Male Senior":male.senior, "Female Senior":female.senior, "Male Adult":male.adult, "Female Adult":female.adult, "Male Child":male.child, "Female Child":female.child},
        {"":"Employed", Male:male.employed, Female:female.employed, "Male Senior":maleSenior.employed, "Female Senior":femaleSenior.employed, "Male Adult":maleAdult.employed, "Female Adult":femaleAdult.employed, "Male Child":"--", "Female Child":"--"},
        {"":"Veteran", Male:male.veteran, Female:female.veteran, "Male Senior":maleSenior.veteran, "Female Senior":femaleSenior.veteran, "Male Adult":maleAdult.veteran, "Female Adult":femaleAdult.veteran, "Male Child":"--", "Female Child":"--"},
        {"":"1st Meal This Year", Male:male.firstMealYear, Female:female.firstMealYear, "Male Senior":maleSenior.firstMealYear, "Female Senior":femaleSenior.firstMealYear, "Male Adult":maleAdult.firstMealYear, "Female Adult":femaleAdult.firstMealYear, "Male Child":maleChild.firstMealYear, "Female Child":femaleChild.firstMealYear},
        {"":"1st Meal This Month", Male:male.firstMealMonth, Female:female.firstMealMonth, "Male Senior":maleSenior.firstMealMonth, "Female Senior":femaleSenior.firstMealMonth, "Male Adult":maleAdult.firstMealMonth, "Female Adult":femaleAdult.firstMealMonth, "Male Child":maleChild.firstMealMonth, "Female Child":femaleChild.firstMealMonth}
      ]

      if(p[i-1] && p[i].createdAt.toDateString() === p[i-1].createdAt.toDateString()) {
        var pa = peopleArray[peopleArray.length - 1]
        var pd = peopleData
        for (var i = 1; i < pa.length; i++) {
          pa[i].Male += pd[i].Male
          pa[i].Female += pd[i].Female
          pa[i]["Male Senior"] += pd[i]["Male Senior"]
          pa[i]["Female Senior"] += pd[i]["Female Senior"]
          pa[i]["Male Adult"] += pd[i]["Male Adult"]
          pa[i]["Female Adult"] += pd[i]["Female Adult"]
          if (i !== 2 && i !== 3) {
            pa[i]["Male Child"] += pd[i]["Male Child"]
            pa[i]["Female Child"] += pd[i]["Female Child"]
          }
        }
      } else {
        peopleArray.push(peopleData)
      }
    }

    var csv = convertArrayOfObjectsToCSV({
      data: peopleArray
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

  renderPeople = () => {
    let start = this.state.startDate
    let end = this.state.endDate
    let p = this.props.people
    p = p.filter(function(person) {
      return person.createdAt >= start && person.createdAt <= end
    })

    let peopleArray = []

    for (i in p) {
      let male = {total:0, senior:0, adult:0, child:0, employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , maleSenior = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , maleAdult = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , maleChild = {firstMealYear:0, firstMealMonth:0}

      let female = {total:0, senior:0, adult:0, child:0, employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , femaleSenior = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , femaleAdult = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
      , femaleChild = {firstMealYear:0, firstMealMonth:0}

      if (p[i].gender === "male") {
        male.total += 1
        if (p[i].seniorChild === "senior") {
          male.senior += 1
          if (p[i].employed === "yes") {
            maleSenior.employed += 1
          }
          if (p[i].veteran === "yes") {
            maleSenior.veteran += 1
          }
          if (p[i].firstMealYear === "yes") {
            maleSenior.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            maleSenior.firstMealMonth += 1
          }
        } else if (p[i].seniorChild === "adult") {
          male.adult += 1
          if (p[i].employed === "yes") {
            maleAdult.employed += 1
          }
          if (p[i].veteran === "yes") {
            maleAdult.veteran += 1
          }
          if (p[i].firstMealYear === "yes") {
            maleAdult.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            maleAdult.firstMealMonth += 1
          }
        } else if (p[i].seniorChild === "child") {
          male.child += 1
          if (p[i].firstMealYear === "yes") {
            maleChild.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            maleChild.firstMealMonth += 1
          }
        }
        if (p[i].employed === "yes") {
          male.employed += 1
        }
        if (p[i].veteran === "yes") {
          male.veteran += 1
        }
        if (p[i].firstMealYear === "yes") {
          male.firstMealYear += 1
        }
        if (p[i].firstMealMonth === "yes") {
          male.firstMealMonth += 1
        }
      } else if (p[i].gender === "female") {
        female.total += 1
        if (p[i].seniorChild === "senior") {
          female.senior += 1
          if (p[i].employed === "yes") {
            femaleSenior.employed += 1
          }
          if (p[i].veteran === "yes") {
            femaleSenior.veteran += 1
          }
          if (p[i].firstMealYear === "yes") {
            femaleSenior.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            femaleSenior.firstMealMonth += 1
          }
        } else if (p[i].seniorChild === "adult") {
          female.adult += 1
          if (p[i].employed === "yes") {
            femaleAdult.employed += 1
          }
          if (p[i].veteran === "yes") {
            femaleAdult.veteran += 1
          }
          if (p[i].firstMealYear === "yes") {
            femaleAdult.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            femaleAdult.firstMealMonth += 1
          }
        } else if (p[i].seniorChild === "child") {
          female.child += 1
          if (p[i].firstMealYear === "yes") {
            femaleChild.firstMealYear += 1
          }
          if (p[i].firstMealMonth === "yes") {
            femaleChild.firstMealMonth += 1
          }
        }
        if (p[i].employed === "yes") {
          female.employed += 1
        }
        if (p[i].veteran === "yes") {
          female.veteran += 1
        }
        if (p[i].firstMealYear === "yes") {
          female.firstMealYear += 1
        }
        if (p[i].firstMealMonth === "yes") {
          female.firstMealMonth += 1
        }
      }
      let peopleData = [
        {Created:p[i].createdAt.toDateString(), Male:"Male", Female:"Female", "Male Senior":"Male Senior", "Female Senior":"Female Senior", "Male Adult":"Male Adult", "Female Adult":"Female Adult", "Male Child":"Male Child", "Female Child":"Female Child"},
        {"":"Total", Male:male.total, Female:female.total, "Male Senior":male.senior, "Female Senior":female.senior, "Male Adult":male.adult, "Female Adult":female.adult, "Male Child":male.child, "Female Child":female.child},
        {"":"Employed", Male:male.employed, Female:female.employed, "Male Senior":maleSenior.employed, "Female Senior":femaleSenior.employed, "Male Adult":maleAdult.employed, "Female Adult":femaleAdult.employed, "Male Child":"--", "Female Child":"--"},
        {"":"Veteran", Male:male.veteran, Female:female.veteran, "Male Senior":maleSenior.veteran, "Female Senior":femaleSenior.veteran, "Male Adult":maleAdult.veteran, "Female Adult":femaleAdult.veteran, "Male Child":"--", "Female Child":"--"},
        {"":"1st Meal This Year", Male:male.firstMealYear, Female:female.firstMealYear, "Male Senior":maleSenior.firstMealYear, "Female Senior":femaleSenior.firstMealYear, "Male Adult":maleAdult.firstMealYear, "Female Adult":femaleAdult.firstMealYear, "Male Child":maleChild.firstMealYear, "Female Child":femaleChild.firstMealYear},
        {"":"1st Meal This Month", Male:male.firstMealMonth, Female:female.firstMealMonth, "Male Senior":maleSenior.firstMealMonth, "Female Senior":femaleSenior.firstMealMonth, "Male Adult":maleAdult.firstMealMonth, "Female Adult":femaleAdult.firstMealMonth, "Male Child":maleChild.firstMealMonth, "Female Child":femaleChild.firstMealMonth}
      ]

      if(p[i-1] && p[i].createdAt.toDateString() === p[i-1].createdAt.toDateString()) {
        var pa = peopleArray[peopleArray.length - 1]
        var pd = peopleData
        for (var i = 1; i < pa.length; i++) {
          pa[i].Male += pd[i].Male
          pa[i].Female += pd[i].Female
          pa[i]["Male Senior"] += pd[i]["Male Senior"]
          pa[i]["Female Senior"] += pd[i]["Female Senior"]
          pa[i]["Male Adult"] += pd[i]["Male Adult"]
          pa[i]["Female Adult"] += pd[i]["Female Adult"]
          if (i !== 2 && i !== 3) {
            pa[i]["Male Child"] += pd[i]["Male Child"]
            pa[i]["Female Child"] += pd[i]["Female Child"]
          }
        }
      } else {
        peopleArray.push(peopleData)
      }
    }

    if (peopleArray.length > 0) {
      $("#download").show()
      return peopleArray.map((person) => (
        <AdminDailyPerson key={person._id} id={person._id} person={person} />
      ))
    } else {
      $("#download").hide()
      return <h2>No Results Found</h2>
    }
  }

  render() {
    if (Cookies.get('loggedIn')) {
      return (
        <div>
          <h1>Daily Report</h1>
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
          <a href="/admin" className="btn btn-primary marginLeftBtn" role="button">Current List</a>
          {/* <a href="/adminArchive" className="btn btn-primary marginLeftBtn" role="button">Archive</a> */}
          <button className="btn btn-danger marginLeftBtn" onClick={() => this.logOutHandler()}>Log Out</button>
          <div id="table_wrapper">
            {this.renderPeople()}
            <a id="download" className="btn btn-lg btn-primary" onClick={() => this.downloadCSV({ data: this.state.peopleData, filename: "Poverello Daily Report.csv" })}>Export</a>
          </div>
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
}, AdminDailyReport);
