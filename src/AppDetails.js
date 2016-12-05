import React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

const AppDetails = ({containersStyle, rounded, zDepth}) => {
  return (
    <div style={containersStyle}>
      <Card rounded={rounded} zDepth={zDepth}>
        <CardTitle title="Luke Skywalker" subtitle="people" />
        <CardText>
          <p><b>height</b> 172</p>
          <p><b>mass</b> 77</p>
          <p><b>hair_color</b> Blond</p>
          <p><b>skin_color</b> Caucasian</p>
          <p><b>eye_color</b> Blue</p>
          <p><b>birth_year</b> 19 BBY</p>
          <p><b>gender</b> Male</p>
        </CardText>
      </Card>
    </div>
  );
}

AppDetails.propTypes = {
  containersStyle: React.PropTypes.object.isRequired,
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired
};

export default AppDetails;

//TODO use material ui lists ?