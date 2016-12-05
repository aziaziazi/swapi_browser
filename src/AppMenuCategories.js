import React, { Component } from 'react';

import { categories } from './constants';
import AppMenuItem from './AppMenuItem';

class AppMenuCategories extends Component {
  render() {

    const menuCategories = categories.map((categorie, index) =>
      <AppMenuItem key={index} categorie={categorie}/>
    )

    return (
      <div>{menuCategories}</div>
    )
  }
}

export default AppMenuCategories;
//TODO fix divider


