import axios from 'axios';

import { getURLWithKey } from '../utils';

export const fetchImages = (query) => (
  axios.get(`${getURLWithKey()}&${query}`)
);
