import { FETCH_IMAGES, FETCH_IMAGES_FAIL, FETCH_IMAGES_START, FETCH_IMAGES_SUCCESS } from '../constants';

export const fetchImages = query => {
  return {
    type: FETCH_IMAGES,
    query
  };
};

export const fetchImagesStart = () => ({
  type: FETCH_IMAGES_START,
  loading: true
});

export const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  loading: false,
  images
});

export const fetchImagesFail = error => () => ({
  type: FETCH_IMAGES_FAIL,
  loading: false,
  error
});
