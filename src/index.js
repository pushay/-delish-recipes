import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux';
import storeInputReducer from './store/reducers/storeInput';
import sendSetFilterReducer from './store/reducers/sendSetFilter'
import sendValueFilterReducer from './store/reducers/sendValueFilter';
import sendResetInfoReducer from './store/reducers/sendResetInfo';
import sendValueSortReducer from './store/reducers/sendValueSort';
import sendSetSidebarReducer from './store/reducers/sendSetSidebar';

const rootReducer = combineReducers({
  inp:storeInputReducer,
  ssf:sendSetFilterReducer,
  fvalues:sendValueFilterReducer,
  inf:sendResetInfoReducer,
  svs:sendValueSortReducer,
  sss:sendSetSidebarReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
