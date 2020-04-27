// @flow
import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import * as actions from "../../redux/actions";
import type { Action } from "../../redux/actions";
import type { Dispatch } from "redux";
import createRandomArray from "../../services/randomArray";
import "./Inputs.module.css";

const Inputs = () => {
  const dispatch = useDispatch<Dispatch<Action>>();
  const [params, setParams] = useState({ m: "", n: "", x: "" });
  const { m, n, x } = params;

  const inputHandler = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setParams({ ...params, [id]: value });
  };

  const submitHandler = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    const rowsQty = +m;
    const columnsQty = +n;
    const illuminatedQty = +x;
    if (rowsQty <= 0 || columnsQty <= 0 || illuminatedQty < 0) {
      alert("array parameters must be more then 0");
      return;
    }
    batch(() => {
      dispatch(actions.saveParams({ n: columnsQty, x: illuminatedQty }));

      const { array, rows, cells } = createRandomArray(rowsQty, columnsQty);
      dispatch(actions.saveArray(array));
      dispatch(actions.saveRows(rows));
      dispatch(actions.saveCells(cells));
    });
    setParams({ m: "", n: "", x: "" });
  };

  return (
    <div styleName="formWrapper">
      <h1 styleName="formTitle">Enter table parameters</h1>
      <form styleName="form" onSubmit={submitHandler} id="form">
        <div styleName="inputWrapper">
          <label htmlFor="m" styleName="label">
            Rows quantity:
          </label>
          <input
            styleName="input"
            type="number"
            name="rows"
            id="m"
            onChange={inputHandler}
            value={m}
            placeholder="0"
          />
        </div>
        <div styleName="inputWrapper">
          <label htmlFor="n" styleName="label">
            Columns quantity:
          </label>
          <input
            styleName="input"
            type="number"
            name="columns"
            id="n"
            onChange={inputHandler}
            value={n}
            placeholder="0"
          />
        </div>
        <div styleName="inputWrapper">
          <label htmlFor="m" styleName="label">
            Illuminated cells quantity:
          </label>
          <input
            styleName="input"
            type="number"
            name="illuminate"
            id="x"
            onChange={inputHandler}
            value={x}
            placeholder="0"
          />
        </div>
        <div>
          <input styleName="submitButton" type="submit" value="Generate" />
        </div>
      </form>
    </div>
  );
};

export default Inputs;
