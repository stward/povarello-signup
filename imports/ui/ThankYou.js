import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

class ThankYou extends Component {
  render() {
    return (
      <div>
        <div className="height30px"></div>
        <h1>Thank You for Registering!</h1>
        <script type="text/javascript">
          window.onload = function() {
            setTimeout(function(){
              window.location.href = "/"
            }, 10000)
          }
        </script>
      </div>
    )
  }
}

export default createContainer(() => {
  return {};
}, ThankYou);
