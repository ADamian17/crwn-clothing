import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

/* middlewares */
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

let middlewares = [thunk];

if(process.env.NODE_ENV === "development" ) {
  middlewares = [...middlewares, logger]
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
