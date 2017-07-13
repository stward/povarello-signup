import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js'

export default class AdminDailyPerson extends Component {
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>{this.props.person[0].Created}</th>
            <th>{this.props.person[0].Male}</th>
            <th>{this.props.person[0].Female}</th>
            <th>{this.props.person[0]["Male Senior"]}</th>
            <th>{this.props.person[0]["Female Senior"]}</th>
            <th>{this.props.person[0]["Male Adult"]}</th>
            <th>{this.props.person[0]["Female Adult"]}</th>
            <th>{this.props.person[0]["Male Child"]}</th>
            <th>{this.props.person[0]["Female Child"]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total</td>
            <td>{this.props.person[1].Male}</td>
            <td>{this.props.person[1].Female}</td>
            <td>{this.props.person[1]["Male Senior"]}</td>
            <td>{this.props.person[1]["Female Senior"]}</td>
            <td>{this.props.person[1]["Male Adult"]}</td>
            <td>{this.props.person[1]["Female Adult"]}</td>
            <td>{this.props.person[1]["Male Child"]}</td>
            <td>{this.props.person[1]["Female Child"]}</td>
          </tr>
          <tr>
            <td>Employed</td>
            <td>{this.props.person[2].Male}</td>
            <td>{this.props.person[2].Female}</td>
            <td>{this.props.person[2]["Male Senior"]}</td>
            <td>{this.props.person[2]["Female Senior"]}</td>
            <td>{this.props.person[2]["Male Adult"]}</td>
            <td>{this.props.person[2]["Female Adult"]}</td>
            <td>{this.props.person[2]["Male Child"]}</td>
            <td>{this.props.person[2]["Female Child"]}</td>
          </tr>
          <tr>
            <td>Veteran</td>
            <td>{this.props.person[3].Male}</td>
            <td>{this.props.person[3].Female}</td>
            <td>{this.props.person[3]["Male Senior"]}</td>
            <td>{this.props.person[3]["Female Senior"]}</td>
            <td>{this.props.person[3]["Male Adult"]}</td>
            <td>{this.props.person[3]["Female Adult"]}</td>
            <td>{this.props.person[3]["Male Child"]}</td>
            <td>{this.props.person[3]["Female Child"]}</td>
          </tr>
          <tr>
            <td>1st Meal This Year</td>
            <td>{this.props.person[4].Male}</td>
            <td>{this.props.person[4].Female}</td>
            <td>{this.props.person[4]["Male Senior"]}</td>
            <td>{this.props.person[4]["Female Senior"]}</td>
            <td>{this.props.person[4]["Male Adult"]}</td>
            <td>{this.props.person[4]["Female Adult"]}</td>
            <td>{this.props.person[4]["Male Child"]}</td>
            <td>{this.props.person[4]["Female Child"]}</td>
          </tr>
          <tr>
            <td>1st Meal This Month</td>
            <td>{this.props.person[5].Male}</td>
            <td>{this.props.person[5].Female}</td>
            <td>{this.props.person[5]["Male Senior"]}</td>
            <td>{this.props.person[5]["Female Senior"]}</td>
            <td>{this.props.person[5]["Male Adult"]}</td>
            <td>{this.props.person[5]["Female Adult"]}</td>
            <td>{this.props.person[5]["Male Child"]}</td>
            <td>{this.props.person[5]["Female Child"]}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
