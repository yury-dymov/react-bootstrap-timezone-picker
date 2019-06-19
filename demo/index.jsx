import React, { Component } from 'react';
import TimezonePicker       from '../dist/react-bootstrap-timezone-picker';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { currentValue: '', absolute: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }  

  handleChange(newValue) {
    this.setState({ currentValue: newValue });
  }

  handleToggle() {
    this.setState({ absolute: !this.state.absolute });
  }

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
          placeholder   = "Select timezone..."
          onChange      = {this.handleChange}
          absolute      = {this.state.absolute}
          value         = {this.state.currentValue}
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
