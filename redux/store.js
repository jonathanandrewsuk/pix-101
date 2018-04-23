import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import allReducers from './reducers';
import allSagas from './sagas';

// Initiating sagas middleware
const sagaMiddleware = createSagaMiddleware();

// Setting up redux devtool enhancers
const middleware = applyMiddleware(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancedMiddlware = composeEnhancers(middleware);

const exportStore = () => {
  const store = createStore(
    allReducers,
    enhancedMiddlware,
  );
  sagaMiddleware.run(allSagas);
  return store;
};

const store = exportStore();

export default store;
