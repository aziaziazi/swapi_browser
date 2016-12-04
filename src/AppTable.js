import React, { Component } from 'react';

import {Table, TableBody, TableFooter, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import MookData from './MookData';
import AppTableEntrie from './AppTableEntrie';
import AppTableButtons from './AppTableButtons';

class AppTable extends Component {
  render() {

    const Entries = MookData.results.map((entrie, index) =>
      <AppTableEntrie key={index} entrie={entrie}/>
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
                <AppTableButtons />
              </TableRow>
            </TableFooter>
           </Table>
        </Paper>
      </div>
    );
  }
}

export default AppTable;

//<IconButton iconClassName="muidocs-icon-custom-github" />
