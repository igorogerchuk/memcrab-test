import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import styled from "styled-components";

const TdSum = styled.td`
  background-color: cadetblue;
`;

const Td = styled.td`
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

class ArrayLine extends Component {
  increaseHandler = e => {
    const { onIncrease } = this.props;
    onIncrease(e.target.id);
  };
  render() {
    const { line, onRemove } = this.props;
    return (
      <tr>
        {line.map(element => (
          <Td onClick={this.increaseHandler} key={element.id} id={element.id}>
            {element.amount}
          </Td>
        ))}
        <TdSum>
          {line.reduce((sum, element) => (sum += element.amount), 0)}
        </TdSum>
        <td>
          <button onClick={onRemove}>Remove</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(actions.removeLine(ownProps.line)),
    onIncrease: id => dispatch(actions.increase(id))
  };
};

export default connect(null, mapDispatchToProps)(ArrayLine);
