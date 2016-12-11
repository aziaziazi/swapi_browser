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

export const getDataTable = (params) => {
  return axios
    .get(baseURL + params)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    });
}