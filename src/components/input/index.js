import React from 'react';

import './style.css';

export default class Input extends React.Component {

  state = {
    value: ''
  }

  onChange = (ev) => {
    this.setState({
      value: ev.target.value
    }, () => this.props.onUpdateText(this.state.value));
  }

  render() {
    return (
      <div className="input-container">
        <input
          className="input-container__input"
          onChange={this.onChange}
          value={this.state.value}
        />
      </div>
    )
  }
}