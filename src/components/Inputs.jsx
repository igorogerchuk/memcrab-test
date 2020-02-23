import React, { Component } from "react";

export default class Inputs extends Component {
  state = { m: 0, n: 0, x: 0 };

  inputHandler = () => {};

  submitHandler = e => {
    e.preventDefault();

    console.log("submit");
  };

  render() {
    return (
      <div>
        <p>Enter table parameters</p>
        <form onSubmit={this.submitHandler}>
          <label>
            Lines quantity: <input type="number" name="lines" id="m" />
          </label>
          <label>
            Columns quantity:
            <input type="number" name="columns" id="n" />
          </label>
          <label>
            Illuminated cells quantity:
            <input type="number" name="illuminate" id="x" />
          </label>
          <input type="submit" value="Generate" />
        </form>
      </div>
    );
  }
}
