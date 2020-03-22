import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as selectors from "../../redux/selectors";
import createRandomArray from "../../services/randomArray";
import styles from "./AddRowButton.module.css";

class AddRowButton extends Component {
  addHandler = () => {
    const { onAdd } = this.props;
    onAdd(createRandomArray(1));
  };

  render() {
    return (
      <button className={styles.button} onClick={this.addHandler}>
        +
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: newRow => dispatch(actions.addRow(newRow))
  };
};

const mapStateToProps = state => {
  return {
    // rowLength: selectors.getColumnsQty(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRowButton);
