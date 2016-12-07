import axios from 'axios'
import { baseURL } from './constants';

export const getDataCategories = () => {
  return axios
    .get(baseURL)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}

export const getDataTable = (categorie) => {
  return axios
    .get(baseURL + categorie)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    });
}