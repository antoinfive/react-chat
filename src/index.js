/* eslint-disable import/default */

import 'babel-polyfill' ;
import React from 'react';  
import { render } from 'react-dom';  
import App from './components/App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore();
render(
  <Provider store={store}>  
    <App />
  </Provider>,
 document.getElementById('main')
);
