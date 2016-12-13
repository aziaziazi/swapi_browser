import React, { Component } from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import { categorieDisplayedProperty } from './constants'

// Did't Use Stateless Component Pattern because onClick would be overided
// by internal handlers override the child prop.
// Solution used : https://github.com/callemall/material-ui/issues/1783#issuecomment-201124279
class AppTableEntrie extends Component {
    render() {
      let propertyToDisplay = categorieDisplayedProperty[this.props.currentCategorie]
      console.log('propertyToDisplay => ',propertyToDisplay);

      return (
        <TableRow onClick={() => this.props.onSelectItem(this.props.entrie)}>
          <TableRowColumn>{this.props.entrie[propertyToDisplay]}</TableRowColumn>
        </TableRow>)
    }
}

export default AppTableEntrie;