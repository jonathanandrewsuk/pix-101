import { call, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import services from '../services';
import { REPLACE_IMAGES } from '../actions';

function* fetchImagesSaga(action) {
  try {
    const data = yield call(services.getImagesService, action.data);
    yield put({ type: REPLACE_IMAGES, data });
  } catch (error) {
    yield put({ type: 'REPLACE_IMAGES_FAILURE', error });
  }
}

export default function* imagesSagas() {
  yield takeEvery('$FETCH_IMAGES', fetchImagesSaga);
}
