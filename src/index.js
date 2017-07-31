import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import nursenaApp from './reducers'


let store = createStore(nursenaApp)

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider {...{store}}>
      <App />
  </Provider>
  , document.getElementById('root'));
