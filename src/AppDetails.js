import React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

const AppDetails = ({containersStyle, rounded, zDepth, currentItem}) => {
  return (
      <Card rounded={rounded} zDepth={zDepth}>
        <CardTitle
          debug={console.log('currentItem => ',currentItem)}
          title={currentItem.name} subtitle="" />
        <CardText>
          //////FILLTEXT
          <p><b>height</b>{currentItem.height}</p>
          <p><b>mass</b> 77</p>
          <p><b>hair_color</b> Blond</p>
          <p><b>skin_color</b> Caucasian</p>
          <p><b>eye_color</b> {currentItem.eye_color}</p>
          <p><b>birth_year</b> 19 BBY</p>
          <p><b>gender</b> Male</p>
          //////FILLTEXT
        </CardText>
      </Card>
  );
}

AppDetails.propTypes = {
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired
};

export default AppDetails;

//TODO use material ui lists ?