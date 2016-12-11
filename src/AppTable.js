import React, { Component } from 'react';

import {Table, TableBody, TableFooter, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import AppTableEntrie from './AppTableEntrie';
import AppTableNavigation from './AppTableNavigation';
import { getDataTable } from './DataFetching';
import { categorieDisplayedProperty } from './constants';
import Loading from './Loading';
import { baseURL } from './constants';

// Fix of line wide
const TableRowFooterStyle = {
  borderTop:'none'
}

let tableItems = [];

class AppTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries : null,
      linkNext: '',
      linkPrevious: ''
    };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  componentWillMount() {
    this.updateEntriesState(this.props.currentCategorie)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentCategorie != this.props.currentCategorie){
      this.updateEntriesState(nextProps.currentCategorie)
    }
  }

  handleClickNext(){
    if (this.state.linkNext != ''){
      this.updateEntriesState(this.state.linkNext)
    }
  }

  handleClickPrevious(){
    if (this.state.linkPrevious != ''){
      this.updateEntriesState(this.state.linkPrevious)
    }
  }

  updateEntriesState(param){
    console.log('___Updating')
    getDataTable(param)
      .then(data => {
        // Find a nicer way to do that
        let ArgNext
        if (data.next) {
          ArgNext = data.next.slice(baseURL.length)
        } else {
          ArgNext=''
        }

        let ArgPrevious
        if (data.previous) {
          ArgPrevious = data.previous.slice(baseURL.length)
        } else {
          ArgPrevious=''
        }

        this.setState({
          entries: this.makeRowsDivs(data),
          linkNext: ArgNext,
          linkPrevious: ArgPrevious
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  makeRowsDivs(data) {
    const rowEntries = data.results;
    const entriesNames = [];
    for(let i in rowEntries){
      entriesNames.push(rowEntries[i][categorieDisplayedProperty[this.props.currentCategorie]])
    }
    return entriesNames.map((entrie, index) =>
      <AppTableEntrie key={index} entrieName={entrie}/>)
  }

  render() {
    if (this.state.entries){
      {console.log('___Rendering')}
      return (
        <div style={this.props.containersStyle}>
          <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
            <Table>
              <TableBody displayRowCheckbox={false} >
                {this.state.entries}
              </TableBody>
              <TableFooter adjustForCheckbox={false}>
                <TableRow style={TableRowFooterStyle}>
                  <AppTableNavigation
                    onClickNext={this.handleClickNext}
                    onClickPrevious={this.handleClickPrevious}
                    next={this.state.linkNext}
                    previous={this.state.linkPrevious}/>
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
