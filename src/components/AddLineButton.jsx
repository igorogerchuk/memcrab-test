import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import * as selectors from "../redux/selectors";
import createRandomArray from "../services/randomArray";

class AddLineButton extends Component {
  addHandler = () => {
    const { lineLength, onAdd } = this.props;
    onAdd(createRandomArray(1, lineLength));
  };

  render() {
    return <button onClick={this.addHandler}>Add Line</button>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: newLine => dispatch(actions.addLine(newLine))
  };
};

const mapStateToProps = state => {
  return {
    lineLength: selectors.getColumnsQty(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLineButton);
