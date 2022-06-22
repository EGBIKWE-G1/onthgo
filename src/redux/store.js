import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';
import { createRootReducer } from './reducers/rootReducer';

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router';

const userInfo = JSON.parse(localStorage.getItem("user1"))
const initialState = { userInfo }; //We can load this data as preloaded state

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['flight'],

};

export const history = createBrowserHistory()
const persistedReducer = persistReducer(persistConfig, createRootReducer(history));


export default function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        ...middleware
      )
    )
  );

  let persistor = persistStore(store)

  return { store, persistor }
}
// export const persistor = persistStore(configureStore())

// export default { configureStore, persistStore };
