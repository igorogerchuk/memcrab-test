import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class ArrayLine extends Component {
  render() {
    const { line, onRemove } = this.props;
    return (
      <tr>
        {line.map(element => (
          <td key={element.id} id={element.id}>
            {element.amount}
          </td>
        ))}
        <td>{line.reduce((sum, element) => (sum += element.amount), 0)}</td>
        <td>
          <button onClick={onRemove}>Remove</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(actions.removeLine(ownProps.line))
  };
};

export default connect(null, mapDispatchToProps)(ArrayLine);
