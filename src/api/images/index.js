import axios from 'axios';

import { getURLWithKey } from '../utils';

export const fetchImages = query => {
  return axios.get(`${ getURLWithKey() }&${ query }`);
};
