import { call, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import services from '../services';
import { REPLACE_IMAGES } from '../actions';

function* clearThenFetchImagesSaga(action) {
  try {
    yield put({ type: 'RESET_STORE' });
    const data = yield call(services.getImagesService, action.data);
    yield put({ type: REPLACE_IMAGES, data });
  } catch (error) {
    yield put({ type: 'REPLACE_IMAGES_FAILURE', error });
  }
}

function* fetchImagesSaga(action) {
  try {
    const data = yield call(services.getImagesService, action.data);
    yield put({ type: REPLACE_IMAGES, data });
  } catch (error) {
    yield put({ type: 'REPLACE_IMAGES_FAILURE', error });
  }
}

export default function* imagesSagas() {
  yield takeLatest('$FETCH_IMAGES', fetchImagesSaga);
  yield takeLatest('$CLEAR_THEN_FETCH_IMAGES', clearThenFetchImagesSaga);
}
