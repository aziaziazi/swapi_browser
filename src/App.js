import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppMenu from './AppMenu';
import AppTitle from './AppTitle';
import DataTable from './DataTable';
import AppDetails from './AppDetails';

const flexboxContainer={
  width:'100%',
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems:  'flex-start'
}

const containersStyle={
  // padding: '',
  // display: 'inline-block',
  // borderbox?
  minWidth: '10em',
  maxWidth:'250px',
  margin: '4em 1.5em 0em 1.5em',
  flexGrow: '1',
  flexBasis:'0',
}

const zDepth=2;
const rounded=false;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={flexboxContainer}>
          <AppTitle containersStyle={containersStyle} rounded={rounded} zDepth={zDepth}/>
          <AppMenu containersStyle={containersStyle} rounded={rounded} zDepth={zDepth}/>
          <DataTable containersStyle={containersStyle} rounded={rounded} zDepth={zDepth}/>
          <AppDetails containersStyle={containersStyle} rounded={rounded} zDepth={zDepth}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;