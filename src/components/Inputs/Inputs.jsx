import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import createRandomArray from "../../services/randomArray";
import styles from "./Inputs.module.css";

class Inputs extends Component {
  state = { m: "", n: "", x: "" };

  inputHandler = e => {
    const { id, value } = e.target;
    this.setState(state => ({ ...state, [id]: value }));
  };

  submitHandler = e => {
    e.preventDefault();
    const { m, n, x } = this.state;
    const { onSaveParams, onSaveArray, onSaveRows, onSaveCells } = this.props;
    if (m <= 0 || n <= 0 || x < 0) {
      alert("array parameters must be more then 0");
      return;
    }
    onSaveParams({ n, x });
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

const mapDispatchToProps = dispatch => {
  return {
    onSaveParams: params => dispatch(actions.saveParams(params)),
    onSaveArray: array => dispatch(actions.saveArray(array)),
    onSaveRows: rows => dispatch(actions.saveRows(rows)),
    onSaveCells: cells => dispatch(actions.saveCells(cells))
  };
};

export default connect(null, mapDispatchToProps)(Inputs);
