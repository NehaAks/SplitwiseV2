import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import createSaga from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import {storage} from './storage';


const persistConfig = {
  key: 'root',
 storage: storage,
};

const configureStore = (preloadedState) => {
  
  const sagaMiddleware = createSaga();

  const middlewares = [ReduxThunk, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(persistedReducer, preloadedState, composedEnhancers);
  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  return { store, persistor };
};

export default configureStore;
