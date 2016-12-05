import React from 'react';

import { title } from './constants';

const titleStyle = {
  textAlign:'right'
}
// TODO : is it better to create inside AppTitle ?

const AppTitle = ({containersStyle}) => {
  return (
    <div style={containersStyle}>
      <h1 style={titleStyle}>{title}</h1>
    </div>
  );
};

AppTitle.propTypes = {
  containersStyle: React.PropTypes.object.isRequired
};
// Does not work ? No error, even if I change 'object' with number


export default AppTitle;