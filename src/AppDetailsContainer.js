import React, { Component } from 'react';

import AppDetails from './AppDetails';

class AppDetailContainer extends Component {

  render(){
    return (
      <div style={this.props.containersStyle}>
        <AppDetails
          rounded={this.props.rounded}
          zDepth={this.props.zDepth}
          currentItem={this.props.currentItem}
        />
      </div>
    );
  }
}

export default AppDetailContainer;

//TODO use material ui lists ?