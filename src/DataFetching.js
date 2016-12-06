import axios from 'axios'

import { baseURL } from './constants';

const getData = () => {
  axios
    .get(baseURL + '')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default getData;