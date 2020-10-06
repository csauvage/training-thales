import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import * as serviceWorker from './serviceWorker';
import './style.css'


ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('application')
)


serviceWorker.unregister();
