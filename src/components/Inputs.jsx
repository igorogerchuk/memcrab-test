import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import createRandomArray from "../services/randomArray";

class Inputs extends Component {
  state = { m: "", n: "", x: "" };

  inputHandler = e => {
    const { id, value } = e.target;
    switch (id) {
      case "m":
        this.setState(state => ({ ...state, m: value }));
        break;
      case "n":
        this.setState(state => ({ ...state, n: value }));
        break;
      case "x":
        this.setState(state => ({ ...state, x: value }));
        break;
      default:
        break;
    }
  };

  submitHandler = e => {
    e.preventDefault();
    const { m, n, x } = this.state;
    const { onSaveArray } = this.props; //, onSaveParams
    if (m <= 0 || n <= 0 || x < 0) {
      alert("array parameters must be more then 0");
      return;
    }
    onSaveArray(createRandomArray(m, n));
    // onSaveParams({ n, x });

    this.setState({ m: "", n: "", x: "" });
  };

  render() {
    const { m, n, x } = this.state;
    return (
      <div>
        <p>Enter table parameters</p>
        <form onSubmit={this.submitHandler}>
          <label>
            Lines quantity:{" "}
            <input
              type="number"
              name="lines"
              id="m"
              onChange={this.inputHandler}
              value={m}
              placeholder="0"
            />
          </label>
          <label>
            Columns quantity:
            <input
              type="number"
              name="columns"
              id="n"
              onChange={this.inputHandler}
              value={n}
              placeholder="0"
            />
          </label>
          <label>
            Illuminated cells quantity:
            <input
              type="number"
              name="illuminate"
              id="x"
              onChange={this.inputHandler}
              value={x}
              placeholder="0"
            />
          </label>
          <input type="submit" value="Generate" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveArray: array => dispatch(actions.saveArray(array))
    // onSaveParams: params => dispatch(actions.saveParams(params))
  };
};

export default connect(null, mapDispatchToProps)(Inputs);
