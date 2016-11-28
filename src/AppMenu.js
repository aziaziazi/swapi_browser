import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const style = {
  display: 'inline-block',
  width: '100%'
};

class AppMenu extends Component {
  render() {
    return (
      <div style={this.props.containersStyle}>
		    <Paper style={style}>
		      <Menu>
		        <MenuItem primaryText="People" />
						<MenuItem primaryText="Planet" />
						<MenuItem primaryText="Film" />
						<MenuItem primaryText="Species" />
						<MenuItem primaryText="Starship" />
						<MenuItem primaryText="Vehicle" />
       			<Divider />
						<MenuItem primaryText="Wookiee Switch"/>
		      </Menu>
		    </Paper>
      </div>
    );
  }
}

export default AppMenu;
