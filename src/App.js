import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppMenu from './AppMenu';
import AppTitle from './AppTitle';
import AppTable from './AppTable';
import AppDetails from './AppDetails';

//TODO make only one object with the constants
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
      currentCategorie : '',
      currentItem: '',         // perhaps better to create an unique object with the two keys (or more)
      wookieeSwitchToogled: false
    }
  }

  // Why wrong syntax highlighting ?
  handleSelectCategorie = (e) => {
    this.setState({currentCategorie: e.target.innerHTML})
  }

  handleSelectItem = (arg) => {
    this.setState({currentItem: arg})
  }

  handleWookieeSwhitch = () => {
    let switchedWookieeState  = !this.state.wookieeSwitchToogled
    this.setState({ wookieeSwitchToogled: switchedWookieeState })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={flexboxContainerStyle}>
            <AppTitle
              containersStyle={containersStyle}
            />
            <AppMenu
              containersStyle={containersStyle}
              rounded={rounded}
              zDepth={zDepth}
              onSelectCategorie={this.handleSelectCategorie}
              onWookieeSwitch={this.handleWookieeSwhitch}
              wookieeSwitchToogled={this.state.wookieeSwitchToogled}
            />
          { this.state.currentCategorie !== '' &&
            <AppTable
              containersStyle={containersStyle}
              rounded={rounded}
              zDepth={zDepth}
              currentCategorie={this.state.currentCategorie}
              onSelectItem={this.handleSelectItem}
              wookieeSwitchToogled={this.state.wookieeSwitchToogled}
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