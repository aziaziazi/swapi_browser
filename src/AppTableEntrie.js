import React, { Component } from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

class AppTableEntrie extends Component {
  render() {
    return (
      <TableRow>
				<TableRowColumn>{this.props.entrie.name}</TableRowColumn>
		  </TableRow>
    );
  }
}

export default AppTableEntrie;