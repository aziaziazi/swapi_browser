import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppMenu from './AppMenu';
import AppTitleBar from './AppTitleBar';
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

const zDepth=1;
const rounded=false;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategorie : '',
      currentItem: ''         // perhaps better to create an unique object with the two keys (or more)
    }
  }

  handleSelectCategorie = (e) => {
    this.setState({
      currentCategorie: e.target.innerHTML,
      currentItem: ''
    })
  }

  handleSelectItem = (arg) => {
    this.setState({
      currentItem: arg
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={flexboxContainerStyle}>
            <AppTitleBar
              containersStyle={containersStyle}
            />
            <AppMenu
              containersStyle={containersStyle}
              rounded={rounded}
              zDepth={zDepth}
              onSelectCategorie={this.handleSelectCategorie}
            />
          { this.state.currentCategorie !== '' &&
            <AppTable
              containersStyle={containersStyle}
              rounded={rounded}
              zDepth={zDepth}
              currentCategorie={this.state.currentCategorie}
              onSelectItem={this.handleSelectItem}
            />
          }
          { this.state.currentItem !== '' &&
            <AppDetails
              containersStyle={containersStyle}
              rounded={rounded}
              zDepth={zDepth}
              currentCategorie={this.state.currentCategorie}
              currentItem={this.state.currentItem}

            />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

//TODO pass the containerStyle directly here ?