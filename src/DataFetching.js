import axios from 'axios'
import { baseURL } from './constants';

export const getData = (params, wookiee) => {
  let wookieParam = wookiee ? '?format=wookiee' : '';
  return axios
    .get(baseURL + params + wookieParam)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    })
}