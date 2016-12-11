import React from 'react';

import MenuItem from 'material-ui/MenuItem';

const style = {
};

const AppMenuCategoriesItem = ({categorie, onSelectCategorie}) => {
  return (
    <MenuItem
      style={style}
      primaryText={categorie}
      onClick={onSelectCategorie}
      selectedTextColor={'#ff4081'}
      />
  );
}

AppMenuCategoriesItem.propTypes = {
  categorie: React.PropTypes.string.isRequired,
  onSelectCategorie: React.PropTypes.func.isRequired
}

export default AppMenuCategoriesItem;
//TODO fix divider

// TODO should I use onTouchTap instead of onClick ?