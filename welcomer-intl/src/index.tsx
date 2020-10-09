import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import './reset.sass';
import './i18n';
import ChangeLang from './ChangeLang/ChangeLang';

render(
  <React.StrictMode>
    <ChangeLang/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
