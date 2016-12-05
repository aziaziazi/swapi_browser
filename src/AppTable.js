import React, { Component } from 'react';

import {Table, TableBody, TableFooter, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import mookData from './mookData';
import AppTableEntrie from './AppTableEntrie';
import AppTableNavigation from './AppTableNavigation';

class AppTable extends Component {
  render() {

    const Entries = mookData.results.map((entrie, index) =>
      <AppTableEntrie key={index} entrieName={entrie.name}/>
    );

    return (
      <div style={this.props.containersStyle}>
        <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
          <Table>
            <TableBody displayRowCheckbox={false} >
              {Entries}
            </TableBody>
            <TableFooter adjustForCheckbox={false}>
              <TableRow>
                <AppTableNavigation />
              </TableRow>
            </TableFooter>
           </Table>
        </Paper>
      </div>
    );
  }
}

AppTable.propTypes = {
  containersStyle: React.PropTypes.object.isRequired,
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired
}

export default AppTable;

//<IconButton iconClassName="muidocs-icon-custom-github" />
