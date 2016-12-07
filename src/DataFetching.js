import axios from 'axios'
import { baseURL } from './constants';

export const getDataTable = (categorie) => {
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