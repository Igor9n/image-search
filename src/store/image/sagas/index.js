import { take, put, call } from 'redux-saga/effects';
import { FETCH_IMAGES } from '../constants';
import { fetchImages } from '../../../api/images';
import { fetchImagesFail, fetchImagesStart, fetchImagesSuccess } from '../actions';

export function* fetchImagesSaga() {
  while (true) {
    const { query } = yield take(FETCH_IMAGES);

    try {
      yield put(fetchImagesStart());
      const { data } = yield call(fetchImages, query);

      yield put(fetchImagesSuccess(data.hits));
    } catch (error) {
      yield put(fetchImagesFail(error));
    }
  }
}
