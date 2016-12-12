import React, { Component } from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

// Did't Use Stateless Component Pattern because onClick would be overided
// by internal handlers override the child prop.
// Solution used : https://github.com/callemall/material-ui/issues/1783#issuecomment-201124279
class AppTableEntrie extends Component {
    render() {
      return (
        <TableRow onClick={this.props.onSelectItem}>
          <TableRowColumn>{this.props.entrie}</TableRowColumn>
        </TableRow>)
    }
}

export default AppTableEntrie;