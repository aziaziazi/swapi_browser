import React, { Component } from 'react';

class AppTitle extends Component {
  render() {
    return (
      <div style={this.props.containersStyle}>
        <h1>SWAPI Bowser</h1>
      </div>
    );
  }
}

export default AppTitle;