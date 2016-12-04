import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';

import { categories } from './constants';
import AppMenuItem from './AppMenuItem';
import AppMenuWookieeSwitch from './AppMenuWookieeSwitch';

const style = {
  maxWidth: '100%',
};

class AppMenu extends Component {
  render() {

    const menuCategories = categories.map((categorie, index) =>
      <AppMenuItem key={index} categorie={categorie}/>
    );

    return (
      <div style={this.props.containersStyle}>
        <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
          <Menu style={style}>
            {menuCategories}
            <Divider />
            <AppMenuWookieeSwitch />
          </Menu>
        </Paper>
      </div>
    );
  }
}

export default AppMenu;
//TODO fix divider
