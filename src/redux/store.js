import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

/* middlewares */
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware()

let middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === "development" ) {
  middlewares = [...middlewares, logger]
}

export const store = createStore(
  rootReducer, 
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
