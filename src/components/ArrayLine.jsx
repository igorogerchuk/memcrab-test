import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import styled from "styled-components";
import getClosestNumbers from "../services/closestNumbers";
import * as selectors from "../redux/selectors";

const TdSum = styled.td`
  background-color: cadetblue;
`;

const Td = styled.td`
  cursor: pointer;
  background-color: ${props => props.bgColor};
`;

class ArrayLine extends Component {
  increaseHandler = e => {
    const { onIncrease } = this.props;
    onIncrease(e.target.id);
  };

  illuminateHandler = e => {
    const { array, numberQty, onIlluminate } = this.props;
    onIlluminate(getClosestNumbers(array, e.target.id, numberQty));
  };

  render() {
    const { line, onRemove } = this.props;
    return (
      <tr>
        {line.map(element => (
          <Td
            onClick={this.increaseHandler}
            onMouseEnter={this.illuminateHandler}
            key={element.id}
            id={element.id}
            bgColor={element.illuminated ? "green" : "white"}
          >
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

const mapStateToProps = state => {
  return {
    array: selectors.getArray(state),
    numberQty: selectors.getNumbersQty(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(actions.removeLine(ownProps.line)),
    onIncrease: id => dispatch(actions.increase(id)),
    onIlluminate: elements => dispatch(actions.illuminateElements(elements))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayLine);
