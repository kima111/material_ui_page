import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById('root')
);

