import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppMenu from './AppMenu';
import AppTitle from './AppTitle';
import AppTable from './AppTable';
import AppDetails from './AppDetails';

const flexboxContainerStyle={
  width:'100%',
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start'
}

const containersStyle={
  minWidth: '10em',
  maxWidth:'250px',
  margin: '4em 1.5em 1.5em 1.5em',
  flexGrow: '1',
  flexBasis:'0',
}

const zDepth=2;
const rounded=false;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategorie : null,
      currentItem: null
    }
  }

  handleSelectCategorie = (e) => {
    this.setState({currentCategorie: e.target.innerHTML})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={flexboxContainerStyle}>
            <AppTitle
              containersStyle={containersStyle}/>
            <AppMenu
              containersStyle={containersStyle}
              rounded={rounded}
              zDepth={zDepth}
              onSelectCategorie={this.handleSelectCategorie}/>
          { this.state.currentCategorie != null &&
            <AppTable
              containersStyle={containersStyle}
              rounded={rounded}
              zDepth={zDepth}
              currentCategorie={this.state.currentCategorie}/>}
          { this.state.currentItem != null &&
            <AppDetails
              containersStyle={containersStyle}
              rounded={rounded}
              zDepth={zDepth}/>}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

//TODO pass the containerStyle directly here ?