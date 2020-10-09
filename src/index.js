import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './modules'
import logger from 'redux-logger'
import myLogger from './middlewares/myLogger'
import { composeWithDevTools } from 'redux-devtools-extension'
// import ReduxThunk from 'redux-thunk'
import thunk from './middlewares/thuk';

const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(myLogger, logger, thunk))
)
  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



