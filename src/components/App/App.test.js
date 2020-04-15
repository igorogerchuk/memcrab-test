import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../redux/reducer";
import createRandomArray from "../../services/randomArray";
import uuid from "uuid/v4";

it("should render correctly with initial state from Redux store", () => {
  const store = createStore(reducer);
  const snap = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});

jest.mock("uuid/v4");
let i = 1;
uuid.mockImplementation(() => i++);
jest.spyOn(Math, "random").mockReturnValue(0.5);
const { array, rows, cells } = createRandomArray(5, 4);
const params = { n: 4, x: 3 };
const store = createStore(reducer, { array, rows, cells, params });

it("should render correctly with given random array 5x4", () => {
  const snap = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});
