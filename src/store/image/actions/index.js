import { createAction } from 'redux-actions';

import {
  FETCH_IMAGES,
  FETCH_IMAGES_FAIL,
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
} from '../constants';

export const fetchImages = createAction(FETCH_IMAGES);

export const fetchImagesStart = createAction(FETCH_IMAGES_START);

export const fetchImagesSuccess = createAction(FETCH_IMAGES_SUCCESS);

export const fetchImagesFail = createAction(FETCH_IMAGES_FAIL);
