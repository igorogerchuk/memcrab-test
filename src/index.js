// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const root = document.getElementById("root");

const reduxState = window.__REDUX_STATE__;

delete window.__REDUX_STATE__;

const store = configureStore(reduxState);

if (root) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
}
