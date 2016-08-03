import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import TimezonePicker       from '../dist/react-bootstrap-timezone-picker';

class Main extends Component {
  state = { currentValue: 'America/Mazatlan', absolute: false };

  handleChange = (newValue) => this.setState({ currentValue: newValue });

  handleToggle = () => this.setState({ absolute: !this.state.absolute });

  render() {
    return (
      <div>
        <div>
          Current list overflow layout option:
          <button onClick={this.handleToggle} style={{ marginLeft: '10px' }}>
            {this.state.absolute ? 'Absolute' : 'Relative'}
          </button>
        </div>
        <TimezonePicker
          initialValue  = {this.state.currentValue}
          placeholder   = 'Select timezone...'
          onChange      = {this.handleChange}
          absolute      = {this.state.absolute}
        />
        <div>Current Value: <b>{this.state.currentValue}</b></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
