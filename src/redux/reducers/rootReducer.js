
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

import { connectRouter } from 'connected-react-router'
import auth from './auth'
import messages from './messages'
import flight from './flight'
import merchant from './merchant'
import stepper from './stepper'


export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  messages,
  flight,
  merchant,
  stepper,
  toastr: toastrReducer
});

export default createRootReducer

// const rootReducer = combineReducers({
//   auth,
//   messages,
//   flight, 
//   toastr: toastrReducer
// });

// export default persistReducer(persistConfig, createRootReducer)

