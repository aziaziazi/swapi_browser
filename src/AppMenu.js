import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';

import AppMenuWookieeSwitch from './AppMenuWookieeSwitch';
import AppMenuCategories from './AppMenuCategories';

const style = {
  maxWidth: '100%',
};

class AppMenu extends Component {
  render() {
    return (
      <div style={this.props.containersStyle}>
        <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
          <Menu style={style}>
            <AppMenuCategories />
            <Divider />
            <AppMenuWookieeSwitch />
          </Menu>
        </Paper>
      </div>
    );
  }
}

AppMenu.propTypes = {
  containersStyle: React.PropTypes.object.isRequired,
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired
}

export default AppMenu;
//TODO fix divider
