import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';



const AppMenuWookieeSwitch = ({onWookieeSwitch}) => {
  const style = {
  height: '48px',
  lineHeight: '48px',
  whiteSpace: 'nowrap'
  }
  return (
    <MenuItem>
      <Toggle
        style={style}
        label="Wookiee Switch"
        onToggle={onWookieeSwitch}
      />
    </MenuItem>
  );
}

export default AppMenuWookieeSwitch;
//TODO fix divider