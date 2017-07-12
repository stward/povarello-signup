import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js'

export default class AdminDailyPeople extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>Total</td>
          <td>{this.props.people[0].Male}</td>
          <td>{this.props.people[0].Female}</td>
          <td>{this.props.people[0]["Male Senior"]}</td>
          <td>{this.props.people[0]["Female Senior"]}</td>
          <td>{this.props.people[0]["Male Adult"]}</td>
          <td>{this.props.people[0]["Female Adult"]}</td>
          <td>{this.props.people[0]["Male Child"]}</td>
          <td>{this.props.people[0]["Female Child"]}</td>
        </tr>
        <tr>
          <td>Employed</td>
          <td>{this.props.people[1].Male}</td>
          <td>{this.props.people[1].Female}</td>
          <td>{this.props.people[1]["Male Senior"]}</td>
          <td>{this.props.people[1]["Female Senior"]}</td>
          <td>{this.props.people[1]["Male Adult"]}</td>
          <td>{this.props.people[1]["Female Adult"]}</td>
          <td>{this.props.people[1]["Male Child"]}</td>
          <td>{this.props.people[1]["Female Child"]}</td>
        </tr>
        <tr>
          <td>Veteran</td>
          <td>{this.props.people[2].Male}</td>
          <td>{this.props.people[2].Female}</td>
          <td>{this.props.people[2]["Male Senior"]}</td>
          <td>{this.props.people[2]["Female Senior"]}</td>
          <td>{this.props.people[2]["Male Adult"]}</td>
          <td>{this.props.people[2]["Female Adult"]}</td>
          <td>{this.props.people[2]["Male Child"]}</td>
          <td>{this.props.people[2]["Female Child"]}</td>
        </tr>
        <tr>
          <td>3st Meal This Year</td>
          <td>{this.props.people[3].Male}</td>
          <td>{this.props.people[3].Female}</td>
          <td>{this.props.people[3]["Male Senior"]}</td>
          <td>{this.props.people[3]["Female Senior"]}</td>
          <td>{this.props.people[3]["Male Adult"]}</td>
          <td>{this.props.people[3]["Female Adult"]}</td>
          <td>{this.props.people[3]["Male Child"]}</td>
          <td>{this.props.people[3]["Female Child"]}</td>
        </tr>
        <tr>
          <td>1st Meal This Month</td>
          <td>{this.props.people[4].Male}</td>
          <td>{this.props.people[4].Female}</td>
          <td>{this.props.people[4]["Male Senior"]}</td>
          <td>{this.props.people[4]["Female Senior"]}</td>
          <td>{this.props.people[4]["Male Adult"]}</td>
          <td>{this.props.people[4]["Female Adult"]}</td>
          <td>{this.props.people[4]["Male Child"]}</td>
          <td>{this.props.people[4]["Female Child"]}</td>
        </tr>
      </tbody>
    )
  }
}
