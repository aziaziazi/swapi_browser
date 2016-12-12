import React, { Component } from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

class AppDetailContainer extends Component {


  render(){
    return (
      <Card rounded={this.props.rounded} zDepth={this.props.zDepth}>
        <CardTitle
          title={this.props.currentItem.name} subtitle="" />
        <CardText>
          //////FILLTEXT
          <p><b>height</b>{this.props.currentItem.height}</p>
          <p><b>mass</b> 77</p>
          <p><b>hair_color</b> Blond</p>
          <p><b>skin_color</b> Caucasian</p>
          <p><b>eye_color</b> blue</p>
          <p><b>birth_year</b> 19 BBY</p>
          <p><b>gender</b> Male</p>
          //////FILLTEXT
        </CardText>
      </Card>
    );
  }
}

AppDetailContainer.propTypes = {
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired
};

export default AppDetailContainer;

//TODO use material ui lists ?