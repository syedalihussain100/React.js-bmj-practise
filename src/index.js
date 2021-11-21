import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App name='Mern stack Developer' />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


