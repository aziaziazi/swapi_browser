import React, { Component } from 'react';

import {Table, TableBody, TableFooter, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import AppTableEntrie from './AppTableEntrie';
import AppTableEntries from './AppTableEntries';
import AppTableNavigation from './AppTableNavigation';
import { getDataTable } from './DataFetching';
import { categorieDisplayedProperty } from './constants';
import Loading from './Loading';

// Fix of line wide
const TableRowFooterStyle = {
  borderTop:'none'
}

let tableItems = []; // TODO Change name for 'tableItem' >> more logic because I render an object and no longer an array of names

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
        this.setState({
          entries : this.makeRowsDivs(data)
        })
      //TODO should I catch error here too ?
      });
  }

  // This is not very necessary because :
  //   - componentWillReceiveProps() already check if props and next props are similar (preventing for re-rendering by the parent)
  //   - DOC : "componentWillReceiveProps() is not invoked if you just call this.setState()"
  //     So I don't risk to produce a loop with setState re-rendering.
  // I choosed to leave it anywhay because I'm not absolutely confident, and that's just a double check.
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.entries != this.state.entries;
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.currentCategorie != this.props.currentCategorie &&
    // Above should works too (instead of 'if(true){}'). Should I use it instead ?
    if (nextProps.currentCategorie != this.props.currentCategorie){
      getDataTable(nextProps.currentCategorie)
        .then(data => {
          this.setState({
            entries : this.makeRowsDivs(data)
          })
        //TODO should I catch error here too ?
        });
    }
  }

  makeRowsDivs(data) {
    const rowEntries = data.results;
    const entriesNames = [];
    for(let i in rowEntries){
      entriesNames.push(rowEntries[i][categorieDisplayedProperty[this.props.currentCategorie]])
    }
    console.log('entriesNames => ', entriesNames)
    return entriesNames.map((entrie, index) =>
      <AppTableEntrie key={index} entrieName={entrie}/>)
  }

  render() {
    console.log('Rendering')
    console.log('this.state.entries => ', this.state.entries)

    // var entries = this.getEntries(this.props.currentCategorie)

    if (this.state.entries){
      {console.log('component render')}
      return (
        <div style={this.props.containersStyle}>
          <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
            <Table>
              <TableBody displayRowCheckbox={false} >
                {this.state.entries}
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
