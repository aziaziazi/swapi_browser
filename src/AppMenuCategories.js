import React, { Component } from 'react';

import { categories } from './constants';
import AppMenuCategoriesItem from './AppMenuCategoriesItem';



class AppMenuCategories extends Component {
  render() {

    const menuCategories = categories.map((categorie, index) =>
      <AppMenuCategoriesItem key={index} categorie={categorie}/>
    );

    return (
      <div>{menuCategories}</div>
    )
  }
}

export default AppMenuCategories;
//TODO fix divider


