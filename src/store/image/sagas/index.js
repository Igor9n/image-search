import { take, put, call } from 'redux-saga/effects';
import { FETCH_IMAGES } from '../constants';
import { fetchImages } from '../../../api/images';
import { fetchImagesFail, fetchImagesStart, fetchImagesSuccess } from '../actions';

export function* fetchImagesSaga() {
  while (true) {
    const { payload: { query } } = yield take(FETCH_IMAGES);

    try {
      yield put(fetchImagesStart({ loading: true }));
      const { data } = yield call(fetchImages, query);

      yield put(fetchImagesSuccess({
        loading: false,
        data: data.hits
      }));
    } catch (error) {
      yield put(fetchImagesFail({
        loading: false,
        error
      }));
    }
  }
}
