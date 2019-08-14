import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import imagesReducer from './image/reducer';
import fetchImagesSaga from './image/sagas';

export const rootReducer = combineReducers({
  images: imagesReducer,
});

export function* rootSaga() {
  yield all([
    fetchImagesSaga(),
  ]);
}
