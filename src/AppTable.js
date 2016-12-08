import React, { Component } from 'react';

import {Table, TableBody, TableFooter, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import AppTableEntrie from './AppTableEntrie';
import AppTableNavigation from './AppTableNavigation';
import { getDataTable } from './DataFetching';
import { categorieDisplayedProperty } from './constants';
import Loading from './Loading';

// Fix of line wide
const TableRowFooterStyle = {
  borderTop:'none'
}

class AppTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // entries : null
    };
  }

  getEntries(categorie) {
    getDataTable(categorie)
      .then(data => {
        const rowEntries = data.results;
        const entriesNames = [];
        for(let i in rowEntries){
          entriesNames.push(rowEntries[i][categorieDisplayedProperty[categorie]])
        }
        console.log(entriesNames)
        // return entriesNames
        return entriesNames.map((entrie, index) =>
          <AppTableEntrie key={index} entrieName={entrie}/>)
      });
  }

  render() {
    var entries = this.getEntries(this.props.currentCategorie)

    // if (true){
      {console.log('component render')}
      return (
        <div style={this.props.containersStyle}>
          <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
            <Table>
              <TableBody displayRowCheckbox={false} >
                {entries}
              </TableBody>
              <TableFooter adjustForCheckbox={false}>
                <TableRow style={TableRowFooterStyle}>
                  <AppTableNavigation />
                </TableRow>
              </TableFooter>
             </Table>
          </Paper>
        </div>
      );
    // }

    // return (
    //   <Loading
    //     containersStyle={this.props.containersStyle}
    //     rounded={this.props.rounded}
    //     zDepth={this.props.zDepth} />
    // )
  }
}

AppTable.propTypes = {
  containersStyle: React.PropTypes.object.isRequired,
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired,
  currentCategorie: React.PropTypes.string.isRequired
}

export default AppTable;

//<IconButton iconClassName="muidocs-icon-custom-github" />
