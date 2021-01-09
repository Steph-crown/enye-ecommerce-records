import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from'redux-saga';
import { watcherSaga } from './saga';

const sagaMiddleware = createSagaMiddleWare();

const middlewares = [sagaMiddleware];

let store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
