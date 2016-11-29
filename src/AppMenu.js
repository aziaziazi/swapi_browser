import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const style = {
  maxWidth: '100%',
};

class AppMenu extends Component {
  render() {
    return (
      <div style={this.props.containersStyle}>
		    <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
		      <Menu style={style}>
		        <MenuItem primaryText="People" />
						<MenuItem primaryText="Planet" />
						<MenuItem primaryText="Film" />
						<MenuItem primaryText="Species" />
						<MenuItem primaryText="Starship" />
						<MenuItem primaryText="Vehicle" />
       			<Divider />
						<MenuItem primaryText="Wookiee Switch" disabled={true}/>
		      </Menu>
		    </Paper>
      </div>
    );
  }
}

export default AppMenu;
//TODO fix divider
