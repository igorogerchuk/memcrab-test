import qs from "qs";
import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";

import configureStore from "../src/redux/store";
import App from "../src/components/App";
import createRandomArray from "../src/services/randomArray";

const app = express();

const PORT = 3000;

app.use(handleRender);

function handleRender(req, res) {
  let store;
  const params = qs.parse(req.query);
  if (Object.keys(params).length !== 0) {
    const { rows, columns, illuminate } = params;
    const array = createRandomArray(+rows, +columns);
    const initialState = {
      ...array,
      params: { n: +columns, x: +illuminate },
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const reduxState = JSON.stringify(store.getState());

  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error");
    }
    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${content}</div>`)
        .replace("__REDUX_STATE__={}", `__REDUX_STATE__=${reduxState}`)
    );
  });
}

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on port ${PORT}`);
});
