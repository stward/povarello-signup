import { Fruits } from '../api/fruits.js';
import { createContainer }  from 'meteor/react-meteor-data';
import { AutoComplete }     from 'material-ui';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

const dataSourceConfig = {
  text: 'name',
  value: '_id'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderFruits() {
    let filteredFruits = this.props.fruits;
    return filteredFruits.map((fruit) => (
      <li>{fruit.name}</li>
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Fruits!</h1>
        </header>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <AutoComplete
            filter={AutoComplete.fuzzyFilter}
            openOnFocus={true}
            dataSource={this.props.fruits}
            dataSourceConfig={dataSourceConfig}
            hintText='Type a Fruit'
            maxSearchResults={5}
          />
        </MuiThemeProvider>
        <ul>
          {this.renderFruits()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired
};

export default createContainer(() => {
  return {
    fruits: Fruits.find({}).fetch()
  };
}, App);
