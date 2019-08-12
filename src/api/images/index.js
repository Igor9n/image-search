import axios from 'axios';

import { getApiKey } from '../utils';

const url = `https://pixabay.com/api/?key=${ getApiKey() }`;

export const fetchImages = query => {
  return axios.get(`${ url }&${ query }`);
};
