import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer } from './reducers';

export default (initialState, { isServer, req, debug, storeKey }) => {
  // Redux dev tools set up
  let composeEnhancers = compose;
  if (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  // Redux middlewares
  const middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  // initialize store creation
  const configureStore = reducer =>
    createStore(reducer, composeEnhancers(...enhancers));

  if (isServer) {
    return configureStore(rootReducer, initialState);
  } else {
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    // set store config
    const persistConfig = {
      key: 'nextjs',
      storage,
      blacklist: ['authInterface', 'toastController', 'storeMetaInterface']
    };

    // we'll pass in the configurations and the root reducer
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    // pass in persistedReducer into our store configurator
    const store = configureStore(persistedReducer, initialState);

    // this is hacky, but it works
    store.__persistor = persistStore(store);

    return store;
  }
};
