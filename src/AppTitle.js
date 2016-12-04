import React, { Component } from 'react';

const titleStyle = {
  textAlign:'right'
}

class AppTitle extends Component {
  render() {
    return (
      <div style={this.props.containersStyle}>
        <h1 style={titleStyle}>SWAPI Bowser</h1>
      </div>
    );
  }
}

export default AppTitle;