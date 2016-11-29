import React, { Component } from 'react';

import MenuItem from 'material-ui/MenuItem';

const style = {
};

class AppMenuItem extends Component {
  render() {
    return (
		      <MenuItem style={style} primaryText={this.props.categorie} />
    );
  }
}

export default AppMenuItem;
//TODO fix divider
