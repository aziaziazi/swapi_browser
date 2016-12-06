import axios from 'axios'

import { baseURL } from './constants';

const getDataTable = (categorie) => {
  axios
    .get(baseURL + categorie)
    .then(function (response) {
      console.log(response.data.next)
      console.log(response.data.previous)
      console.log(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default getDataTable;