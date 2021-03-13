import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import { StateProvider } from './context/store';
import { indexReducer } from './context/reducers';
import initialState from './initialState';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={indexReducer} initialState={initialState}>
      <Routes />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
