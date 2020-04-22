import React from "react";
import Array from "./Array";
import SumCell from "../SumCell";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../redux/reducer";
import createRandomArray from "../../services/randomArray";

describe("testing Array methods", () => {
  const { array, rows, cells } = createRandomArray(5, 4);
  const params = { n: 4, x: 3 };
  const store = createStore(reducer, { array, rows, cells, params });
  let component;
  let instance;

  beforeEach(() => {
    renderer.act(() => {
      component = renderer.create(
        <Provider store={store}>
          <Array />
        </Provider>
      );
    });
    instance = component.root;
  });

  describe("own", () => {
    const id = "addButton";

    it("should render correctly after click on the addButton", () => {
      const addButton = instance.findByProps({ id });
      renderer.act(() => addButton.props.onClick());
      const snap = component.toJSON();
      expect(snap).toMatchSnapshot();
    });
  });

  describe("for ArrayCell", () => {
    const id = "2";
    const e = { currentTarget: { id } };
    let arrayCell;
    beforeEach(() => {
      arrayCell = instance.findByProps({ id });
    });

    it("should render correctly after mouse enter ArrayCell td", () => {
      renderer.act(() => arrayCell.props.onHover(e));
      const snap = component.toJSON();
      expect(snap).toMatchSnapshot();
    });

    it("should render correctly after mouse leave ArrayCell td", () => {
      renderer.act(() => arrayCell.props.offHover());
      const snap = component.toJSON();
      expect(snap).toMatchSnapshot();
    });

    it("should render correctly after click on ArrayCell td", () => {
      renderer.act(() => arrayCell.props.onIncrease(e));
      const snap = component.toJSON();
      expect(snap).toMatchSnapshot();
    });
  });

  describe("for ArrayRow", () => {
    it("should render correctly after mouse enter SumCell", () => {
      const sumCell = instance.findAllByType(SumCell);
      renderer.act(() => sumCell[0].props.onHover());
      const snap = component.toJSON();
      expect(snap).toMatchSnapshot();
    });

    it("should render correctly after click on removeButton", () => {
      const id = "6";
      const e = { currentTarget: { id } };
      const removeButton = instance.findByProps({ id });
      renderer.act(() => removeButton.props.onRemove(e));
      const snap = component.toJSON();
      expect(snap).toMatchSnapshot();
    });
  });
});
