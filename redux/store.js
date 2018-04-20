import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import allReducers from './reducers';
// import allSagas from './sagas';

// Initiating sagas middleware
// const sagaMiddleware = createSagaMiddleware();

// Setting up redux devtool enhancers
// const middleware = applyMiddleware(sagaMiddleware);
/* eslint-disable no-undef */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-enable no-undef
// const enhancedMiddlware = composeEnhancers(middleware);

const exportStore = () => {
  // TODO turn off redux devtools in production env
  const store = createStore(allReducers);
  // sagaMiddleware.run(allSagas);
  return store;
};

const store = exportStore();

export default store;
