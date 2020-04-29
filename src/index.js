// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const root = document.getElementById("root");

const store = configureStore(window.__REDUX_STATE__);

if (root) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
}
