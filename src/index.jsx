import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './store';
import { rootSaga } from './store/';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

const app = (
  <Provider store={ store }>
    <App/>
  </Provider>
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
