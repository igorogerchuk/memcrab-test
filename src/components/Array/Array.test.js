import React from "react";
import Array from "./Array";
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
        <Array />
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
        <Array />
      </Provider>
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});

it("should render correctly after click on the addButton", () => {
  let component;
  renderer.act(() => {
    component = renderer.create(
      <Provider store={store}>
        <Array />
      </Provider>
    );
  });

  const instance = component.root;
  const addButton = instance.findByProps({
    id: "addButton",
  });
  renderer.act(() => addButton.props.onClick());
  const snap = component.toJSON();
  expect(snap).toMatchSnapshot();
});
