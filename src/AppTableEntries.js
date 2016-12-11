import React, { Component } from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import AppTableEntrie from './AppTableEntrie';

class AppTableEntries extends Component {
  componentWillReceiveProps(nextProps) {
    // const entriesNames = this.nextProps.entries
    // const entries = entriesNames.map((entrie, index) =>
    //   <AppTableEntrie key={index} entrieName={entrie}/>)
    // console.log('nextProps => ', nextProps)
  }

  render(){
    console.log('AppTableEntries Rendered !!')
    if(this.props.entries){
      return (
        <div>{}</div>
      );
    }
  }
}

AppTableEntries.propTypes = {
  entries: React.PropTypes.object.isRequired
};

export default AppTableEntries;