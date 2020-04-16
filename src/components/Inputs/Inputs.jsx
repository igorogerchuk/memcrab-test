// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import type { Action } from "../../redux/actions";
import type { Dispatch } from "redux";
import createRandomArray from "../../services/randomArray";
import "./Inputs.module.css";
import type {
  ArrayState,
  RowsState,
  CellsState,
  ParamsState,
} from "../../redux/types";

type ownState = {
  m: string,
  n: string,
  x: string,
};

type ownProps = {||};

type DispatchProps = {|
  onSaveParams: (params: ParamsState) => {},
  onSaveArray: (array: ArrayState) => {},
  onSaveRows: (rows: RowsState) => {},
  onSaveCells: (cells: CellsState) => {},
|};

type Props = {
  ...ownProps,
  ...DispatchProps,
};

class Inputs extends Component<Props, ownState> {
  state = { m: "", n: "", x: "" };

  inputHandler = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    this.setState((state) => ({ ...state, [id]: value }));
  };

  submitHandler = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { m, n, x } = this.state;
    const { onSaveParams, onSaveArray, onSaveRows, onSaveCells } = this.props;
    if (Number(m) <= 0 || Number(n) <= 0 || Number(x) < 0) {
      alert("array parameters must be more then 0");
      return;
    }
    onSaveParams({ n: Number(n), x: Number(x) });
    const { array, rows, cells } = createRandomArray(Number(m), Number(n));
    onSaveArray(array);
    onSaveRows(rows);
    onSaveCells(cells);

    this.setState({ m: "", n: "", x: "" });
  };

  render() {
    const { m, n, x } = this.state;
    return (
      <div styleName="formWrapper">
        <h1 styleName="formTitle">Enter table parameters</h1>
        <form styleName="form" onSubmit={this.submitHandler} id="form">
          <div styleName="inputWrapper">
            <label htmlFor="m" styleName="label">
              Rows quantity:
            </label>
            <input
              styleName="input"
              type="number"
              name="rows"
              id="m"
              onChange={this.inputHandler}
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
              onChange={this.inputHandler}
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
              onChange={this.inputHandler}
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  onSaveParams: (params) => dispatch(actions.saveParams(params)),
  onSaveArray: (array) => dispatch(actions.saveArray(array)),
  onSaveRows: (rows) => dispatch(actions.saveRows(rows)),
  onSaveCells: (cells) => dispatch(actions.saveCells(cells)),
});
export default connect<Props, ownProps, _, DispatchProps, _, Dispatch<Action>>(
  null,
  mapDispatchToProps
)(Inputs);
