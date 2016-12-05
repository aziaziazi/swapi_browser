import React from 'react';

import MenuItem from 'material-ui/MenuItem';

const style = {
};

const AppMenuCategoriesItem = ({categorie}) => {
  return (
    <MenuItem style={style} primaryText={categorie} />
  );
}

export default AppMenuCategoriesItem;
//TODO fix divider
