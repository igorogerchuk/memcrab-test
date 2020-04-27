import React from "react";
import Inputs from "./Inputs";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../redux/reducer";

describe("testing Input methods", () => {
  const store = createStore(reducer);
  let component;
  renderer.act(() => {
    component = renderer.create(
      <Provider store={store}>
        <Inputs />
      </Provider>
    );
  });
  const instance = component.root;

  it("should render correctly after some number was typed into form input", () => {
    const id = "m";
    const e = { target: { id, value: 5 } };
    const input = instance.findByProps({ id });
    renderer.act(() => input.props.onChange(e));
    const snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });

  it("should render correctly after form submit", () => {
    const id = "n";
    const e = { target: { id, value: 4 } };
    const input = instance.findByProps({ id });
    renderer.act(() => input.props.onChange(e));
    const form = instance.findByProps({ id: "form" });
    const se = { preventDefault: jest.fn() };
    renderer.act(() => form.props.onSubmit(se));
    const snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });

  it("should render correctly after form submit", () => {
    global.alert = jest.fn();

    const id = "x";
    const e = { target: { id, value: -3 } };
    const input = instance.findByProps({ id });
    renderer.act(() => input.props.onChange(e));
    const form = instance.findByProps({ id: "form" });
    const se = { preventDefault: jest.fn() };
    renderer.act(() => form.props.onSubmit(se));
    expect(global.alert).toHaveBeenCalledWith(
      "array parameters must be more then 0"
    );
  });
});
