import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppMenu from './AppMenu';
import AppTitle from './AppTitle';
import AppTable from './AppTable';
import AppDetails from './AppDetails';

import getDataTable from './DataFetching';

const flexboxContainerStyle={
  width:'100%',
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start'
}

const containersStyle={
  // padding: '',
  // display: 'inline-block',
  // borderbox?
  minWidth: '10em',
  maxWidth:'250px',
  margin: '4em 1.5em 1.5em 1.5em',
  flexGrow: '1',
  flexBasis:'0',
}

const zDepth=2;
const rounded=false;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={flexboxContainerStyle}>
          <AppTitle containersStyle={containersStyle}/>
          <AppMenu containersStyle={containersStyle} rounded={rounded} zDepth={zDepth}/>
          <AppTable containersStyle={containersStyle} rounded={rounded} zDepth={zDepth}/>
          <AppDetails containersStyle={containersStyle} rounded={rounded} zDepth={zDepth}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const param = 'planets/'

// Test
getDataTable(param)

export default App;

//TODO pass the containerStyle directly here ?