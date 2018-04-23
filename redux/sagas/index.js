import { all } from 'redux-saga/effects';
import imagesSagas from './imagesSagas';

export default function* allSagas() {
  yield all([
    imagesSagas(),
  ]);
}
