import React from 'react';

import MenuItem from 'material-ui/MenuItem';

const style = {
};

const AppMenuCategoriesItem = ({categorie}) => {
  return (
    <MenuItem style={style} primaryText={categorie} />
  );
}

AppMenuCategoriesItem.propTypes = {
  categorie: React.PropTypes.string.isRequired
}

export default AppMenuCategoriesItem;
//TODO fix divider
