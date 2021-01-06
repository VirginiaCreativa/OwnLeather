import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './styles/GlobalStyled';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/scss/bootstrap.scss';
import 'boxicons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
