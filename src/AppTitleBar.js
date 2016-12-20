import React from 'react';

import AppBar from 'material-ui/AppBar';

import { title } from './constants';

const titleStyle = {
  textAlign:'center'
}

const AppTitleBar = ({containersStyle}) => {
  const home = (event) => {
    //Back home
  }

  return (
    <AppBar
      title={title}
      style={titleStyle}
      onTitleTouchTap={home}
      showMenuIconButton={false}
    />
  );
};

AppTitleBar.propTypes = {
  containersStyle: React.PropTypes.object.isRequired
};

export default AppTitleBar;

// <a  target={'_blank'}
//     href={'https://github.com/aziaziazi/swapi_browser'}
//     style={titleLinkStyle}>
//   {title}
// </a>