import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchMoviesReject, fetchMoviesSuccess } from './index';
import fetchMaterials from '../../utils/fetchMaterials';

function* workMaterialsFetch() {
  try {
    const response = yield call(fetchMaterials);
    yield put(fetchMoviesSuccess(response));
  } catch (error) {
    yield put(fetchMoviesReject('Hmm... Looks like there is some network issue!!'));
  }
}

export function* moviesSaga() {
  yield takeEvery('movies/fetchMovies', workMaterialsFetch);
}
