import React, { Component } from 'react';

import {TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import {HardwareKeyboardArrowLeft, HardwareKeyboardArrowRight} from 'material-ui/svg-icons/index'

const arrowsStyle = {
}

const TableRowColumnStyle = {
	display:'flex',
 	flexDirection: 'row',
 	flexWrap: 'nowrap',
  justifyContent: 'space-between',
  paddingLeft: '0.6em',
  paddingRight: '0.6em'
}

class AppTableButtons extends Component {
  render() {
    return (
			<TableRowColumn style={TableRowColumnStyle}>
		    <IconButton style={arrowsStyle}>
		    	<HardwareKeyboardArrowLeft />
		    </IconButton>
		    <IconButton style={arrowsStyle}>
		    	<HardwareKeyboardArrowRight />
		    </IconButton>
			</TableRowColumn>
    );
  }
}

export default AppTableButtons;