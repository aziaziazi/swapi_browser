import React, { Component } from 'react';

import {Table, TableBody, TableFooter, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import mookData from './mookData';
import AppTableEntrie from './AppTableEntrie';
import AppTableNavigation from './AppTableNavigation';
import { getDataTable } from './DataFetching';
import { categorieDisplayedProperty } from './constants';
import Loading from './Loading';

// Fix of line wide
const TableRowFooterStyle = {
  borderTop:'none'
}

let entriesName = [];
// should I declare inside class ?



class AppTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries : null
    };
  }

  componentWillMount() {
    getDataTable(this.props.currentCategorie)
      .then(data => {
        this.setState({entries: data.results});
      //TODO should I catch error here too ?
    });
  }

  render() {
    if (this.state.entries){



    // THIS IS OVERCOMPLICATED
    const displayedProperty = categorieDisplayedProperty[this.props.currentCategorie]
    // is it ok to create that here ?
    let thisStateEntries = this.state.entries
    let entriesName = Object.keys(thisStateEntries) // Array of child objects
                            .map((index) => {         // Loop the array
                              return thisStateEntries[index][displayedProperty] // select names
                            })
    console.log('entriesName => ', entriesName)

    const entriesToRender = entriesName.map((entrie, index) =>
      <AppTableEntrie key={index} entrieName={entrie}/>
    );


      return (
        <div style={this.props.containersStyle}>
          <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
            <Table>
              <TableBody displayRowCheckbox={false} >
                {entriesToRender}
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
    }

    return (
      <Loading
        containersStyle={this.props.containersStyle}
        rounded={this.props.rounded}
        zDepth={this.props.zDepth} />
    )
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
