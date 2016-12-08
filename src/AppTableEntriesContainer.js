import React, { Component } from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import AppTableEntrie from './AppTableEntrie';

class AppTableEntriesContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const entriesNames = this.nextProps.entries
    const entries = entriesNames.map((entrie, index) =>
      <AppTableEntrie key={index} entrieName={entrie}/>)
    console.log('nextProps => ', nextProps)
  }

  render(){
    if(this.props.entries){
      return (
        <div>{}</div>
      );
    }
  }
}

AppTableEntriesContainer.propTypes = {
  entries: React.PropTypes.array.isRequired
};

export default AppTableEntriesContainer;