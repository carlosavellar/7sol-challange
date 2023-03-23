import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import moviesReducer from './movies';
import { moviesSaga } from './movies/saga';

function* rootSaga() {
  yield all([moviesSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    moviesReducer,
  },
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
