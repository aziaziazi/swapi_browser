import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppMenu from './AppMenu';
import Title from './Title';
import DataTable from './DataTable';
import Details from './Details';

const flexboxContainer={
  display: 'flex',
  justifyContent: 'space-around'
}

const containersStyle={
  padding: '',
  display: 'inline-block',
  margin: '4em 1.5em 0em 1.5em',
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={flexboxContainer}>
          <Title containersStyle={containersStyle}/>
          <AppMenu containersStyle={containersStyle}/>
          <DataTable containersStyle={containersStyle}/>
          <Details containersStyle={containersStyle}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;