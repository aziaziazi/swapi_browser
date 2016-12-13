import React from 'react';

import { title } from './constants';

const titleStyle = {
  textAlign:'right'
}

const titleLinkStyle = {
  textDecoration: 'none',
  color:'inherit'
}
// TODO : is it better to create inside AppTitle ?

const AppTitle = ({containersStyle}) => {

  const home = (event) => {
    //Back home
  }

  return (
    <div  style={containersStyle}
          onClick={home}>
      <h1 style={titleStyle}>
        <a  target={'_blank'}
            href={'https://github.com/aziaziazi/swapi_browser'}
            style={titleLinkStyle}>
          {title}
        </a>
      </h1>
    </div>
  );
};

AppTitle.propTypes = {
  containersStyle: React.PropTypes.object.isRequired
};

export default AppTitle;