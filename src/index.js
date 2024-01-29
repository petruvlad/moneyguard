import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App'; // Dacă ai un fișier App care integrează componentele și paginile

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
