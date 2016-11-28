import React, { Component } from 'react';

import {Table, TableBody,TableFooter, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

import {HardwareKeyboardArrowLeft, HardwareKeyboardArrowRight} from 'material-ui/svg-icons/index'

import MookData from './MookData';

const NamesOfEntries = MookData.results.map((entrie, index) =>
		<TableRow key={index}>
			<TableRowColumn>{entrie.name}</TableRowColumn>
	  </TableRow>
	);

const arrowsStyle = {
padding:0,
width:20,
}

class DataTable extends Component {
  render() {
    return (
      <div style={this.props.containersStyle}>
      	<Paper>
				  <Table>
				  	<TableBody displayRowCheckbox={false} >
				  		{NamesOfEntries}
				    </TableBody>
				 		<TableFooter adjustForCheckbox={false}>
				 			<TableRow>
								<TableRowColumn>
							    <IconButton style={arrowsStyle}>
							    	<HardwareKeyboardArrowLeft />
							    </IconButton>
							    <IconButton style={arrowsStyle}>
							    	<HardwareKeyboardArrowRight />
							    </IconButton>

    						</TableRowColumn>
				 			</TableRow>
				 		</TableFooter>
				   </Table>
				</Paper>
      </div>
    );
  }
}

export default DataTable;

//<IconButton iconClassName="muidocs-icon-custom-github" />
