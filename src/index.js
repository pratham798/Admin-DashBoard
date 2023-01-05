import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import './index.css';
ReactDOM.render(
  // By wrapping the context provider tag it allows app.js to use all of the hooks present in context
  // the children mentioned in contextprovider.js wraps app.js and then return it so that we can display it otherwise we cant display anything wrapped in context provider
  <ContextProvider>
    <App/>
  </ContextProvider>
,document.getElementById('root')
);


