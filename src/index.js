import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import { RootReducer } from './redux/rootReducer';
import App from './app';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.css";
import './index.scss';
import thunk from 'redux-thunk';

const store = createStore(RootReducer,
    compose(
      applyMiddleware(
        thunk
      )
    )
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
            <App></App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
