import { FETCH_IMAGES_FAIL, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_START } from '../constants';

const initialState = {
  data: null,
  loading: false,
  error: null
};


const fetchImagesStart = (state, action) => ({
  ...state,
  loading: action.payload.loading
});

const fetchImagesSuccess = (state, action) => ({
  ...state,
  loading: action.payload.loading,
  data: action.payload.data
});

const fetchImagesFail = (state, action) => ({
  ...state,
  error: action.payload.error,
  loading: action.payload.loading
});


export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_FAIL:
      return fetchImagesFail(state, action);
    case FETCH_IMAGES_START:
      return fetchImagesStart(state, action);
    case FETCH_IMAGES_SUCCESS:
      return fetchImagesSuccess(state, action);
    default:
      return state;
  }
};