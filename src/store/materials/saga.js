import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchMaterialsReject, fetchMaterialsSuccess } from './reducer';
import fetchMaterials from '../../utils/fetchMaterials';

function* workMaterialsFetch() {
  try {
    const response = yield call(fetchMaterials);
    yield put(fetchMaterialsSuccess(response));
  } catch (error) {
    yield put(fetchMaterialsReject('Hmm... Looks like there is some network issue!!'));
  }
}

export function* materialsSaga() {
  yield takeEvery('movies/fetchMovies', workMaterialsFetch);
}
