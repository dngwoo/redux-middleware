import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './modules'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(logger))
)
  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



