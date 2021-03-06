import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import configureStore from './configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

const store = configureStore();
store.subscribe(() => saveToLocalStorage(store.getState()));
ReactDOM.render(
  <HttpsRedirect>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </HttpsRedirect>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
