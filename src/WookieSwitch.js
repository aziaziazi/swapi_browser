import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import ActionTranslate from 'material-ui/svg-icons/action/translate';


class WookieSwitch extends Component {
  render() {
    return (
    	<div>
    	 	<RaisedButton
	      	icon={<ActionTranslate />}
	      	label="Wookiee"
      		labelPosition="before"
		   	/>
  		</div>
		);
  }
}

export default WookieSwitch;
