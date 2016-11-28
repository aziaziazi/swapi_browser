import React, { Component } from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

class Details extends Component {
  render() {
    return (
      <div style={this.props.containersStyle}>
      	<Card>
      	  <CardTitle title="Luke Skywalker" subtitle="people" />
		      <CardText>
			      <p><b>height</b> 1.72 m</p>
			      <p><b>mass</b> 77 Kg</p>
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
}

export default Details;
