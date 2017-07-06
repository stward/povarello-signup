import Cookies from 'js-cookie'
import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js'
import $ from 'jquery'

class Admin extends Component {

  logOutHandler() {
    Cookies.remove("loggedIn")
    window.location.href = "/"
  }

  renderPeople() {
    let date1 = new Date()
    let date2 = new Date(2017,5,26)
    let date3 = new Date(date2)
    date1.setHours(0,0,0,0)
    date2.setHours(0,0,0,0)
    date3.setDate(date3.getDate() + 1);
    let p = this.props.people
    console.log("date1: " + date1)
    console.log("date2: " + date2)
    console.log("date3: " + date3)
    p = p.filter(function(person) {
      person.createdAt.setHours(0,0,0,0)
      return person.createdAt >= date2 && person.createdAt < date3
    })

    var male = {total:0, senior:0, adult:0, child:0, employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
    , maleSenior = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
    , maleAdult = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
    , maleChild = {firstMealYear:0, firstMealMonth:0}

    var female = {total:0, senior:0, adult:0, child:0, employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
    , femaleSenior = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
    , femaleAdult = {employed:0, veteran:0, firstMealYear:0, firstMealMonth:0}
    , femaleChild = {firstMealYear:0, firstMealMonth:0}

    for (i in p) {
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
    }

    return (
      <div id="table_wrapper">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Male</th>
              <th>Female</th>
              <th>Male Senior</th>
              <th>Female Senior</th>
              <th>Male Adult</th>
              <th>Female Adult</th>
              <th>Male Child</th>
              <th>Female Child</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total</td>
              <td>{male.total}</td>
              <td>{female.total}</td>
              <td>{male.senior}</td>
              <td>{female.senior}</td>
              <td>{male.adult}</td>
              <td>{female.adult}</td>
              <td>{male.child}</td>
              <td>{female.child}</td>
            </tr>
            <tr>
              <td>Employed</td>
              <td>{male.employed}</td>
              <td>{female.employed}</td>
              <td>{maleSenior.employed}</td>
              <td>{femaleSenior.employed}</td>
              <td>{maleAdult.employed}</td>
              <td>{femaleAdult.employed}</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Veteran</td>
              <td>{male.veteran}</td>
              <td>{female.veteran}</td>
              <td>{maleSenior.veteran}</td>
              <td>{femaleSenior.veteran}</td>
              <td>{maleAdult.veteran}</td>
              <td>{femaleAdult.veteran}</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1st Meal This Year</td>
              <td>{male.firstMealYear}</td>
              <td>{female.firstMealYear}</td>
              <td>{maleSenior.firstMealYear}</td>
              <td>{femaleSenior.firstMealYear}</td>
              <td>{maleAdult.firstMealYear}</td>
              <td>{femaleAdult.firstMealYear}</td>
              <td>{maleChild.firstMealYear}</td>
              <td>{femaleChild.firstMealYear}</td>
            </tr>
            <tr>
              <td>1st Meal This Month</td>
              <td>{male.firstMealMonth}</td>
              <td>{female.firstMealMonth}</td>
              <td>{maleSenior.firstMealMonth}</td>
              <td>{femaleSenior.firstMealMonth}</td>
              <td>{maleAdult.firstMealMonth}</td>
              <td>{femaleAdult.firstMealMonth}</td>
              <td>{maleChild.firstMealMonth}</td>
              <td>{femaleChild.firstMealMonth}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    if (Cookies.get('loggedIn')) {
      var today = new Date(2017,5,26).toDateString()
      return (
        <div>
          <h1>Daily Report</h1>
          <h2>{today}</h2>
          <a href="/admin" className="btn btn-primary" role="button">Current List</a>
          <a href="/adminArchive" className="btn btn-primary marginLeftBtn" role="button">Archive</a>
          <button className="btn btn-danger marginLeftBtn" onClick={() => this.logOutHandler()}>Log Out</button>
          {this.renderPeople()}
          <button id="btnExport" className="btn btn-lg btn-primary">Export</button>
          <script>
            $(document).ready(function() {
              $("#btnExport").click(function(e) {
                e.preventDefault();

                var data_type = 'data:application/vnd.ms-excel';
                var table_div = document.getElementById('table_wrapper');
                var table_html = table_div.outerHTML.replace(/ /g, '%20');
                let date2 = new Date(2017,5,26)
                date2.setHours(0,0,0,0)
                date2 = date2.toDateString()

                var a = document.createElement('a');
                a.href = data_type + ', ' + table_html;
                a.download = 'exported_table_' + date2 + '.xls';
                a.click();
              })
            })
          </script>
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