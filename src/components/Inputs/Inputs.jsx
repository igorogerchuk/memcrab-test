// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import createRandomArray from "../../services/randomArray";
import styles from "./Inputs.module.css";
import type {
  ArrayState,
  RowsState,
  CellsState,
  ParamsState
} from "../../redux/types";

type State = {
  m: string,
  n: string,
  x: string
};

type Props = {|
  onSaveParams: (params: ParamsState) => void,
  onSaveArray: (array: ArrayState) => void,
  onSaveRows: (rows: RowsState) => void,
  onSaveCells: (cells: CellsState) => void
|};

class Inputs extends Component<Props, State> {
  state = { m: "", n: "", x: "" };

  inputHandler = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    this.setState(state => ({ ...state, [id]: value }));
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
    const { array, rows, cells } = createRandomArray(m, n);
    onSaveArray(array);
    onSaveRows(rows);
    onSaveCells(cells);

    this.setState({ m: "", n: "", x: "" });
  };

  render() {
    const { m, n, x } = this.state;
    return (
      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>Enter table parameters</h1>
        <form className={styles.form} onSubmit={this.submitHandler}>
          <div className={styles.inputWrapper}>
            <label htmlFor="m" className={styles.label}>
              Rows quantity:
            </label>
            <input
              className={styles.input}
              type="number"
              name="rows"
              id="m"
              onChange={this.inputHandler}
              value={m}
              placeholder="0"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="n" className={styles.label}>
              Columns quantity:
            </label>
            <input
              className={styles.input}
              type="number"
              name="columns"
              id="n"
              onChange={this.inputHandler}
              value={n}
              placeholder="0"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="m" className={styles.label}>
              Illuminated cells quantity:
            </label>
            <input
              className={styles.input}
              type="number"
              name="illuminate"
              id="x"
              onChange={this.inputHandler}
              value={x}
              placeholder="0"
            />
          </div>
          <div>
            <input
              className={styles.submitButton}
              type="submit"
              value="Generate"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: *): Props => ({
  onSaveParams: params => dispatch(actions.saveParams(params)),
  onSaveArray: array => dispatch(actions.saveArray(array)),
  onSaveRows: rows => dispatch(actions.saveRows(rows)),
  onSaveCells: cells => dispatch(actions.saveCells(cells))
});

export default connect<Props, {||}, _, _, _, _>(
  null,
  mapDispatchToProps
)(Inputs);
