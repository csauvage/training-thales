import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home/Home';
import * as serviceWorker from './serviceWorker';
import './style.css'


const App = () => (
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
)

render(
  <App/>,
  document.getElementById('application')
)


serviceWorker.unregister();
