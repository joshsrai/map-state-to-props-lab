import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
const store = createStore(manageUsers)


ReactDOM.render(
  <Provider store={store}>
  {/* add imports and code */}
  <App />
  {/* add imports and code */}
  </Provider>,
  document.getElementById('root')
);
