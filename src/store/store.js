import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import materialsReducer from './materials/reducer';
// import { materialsSaga } from './materials/saga';

// function* rootSaga() {
//   yield all([materialsSaga()]);
// }

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    materialsReducer,
  },
  // middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});
