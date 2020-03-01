import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import * as selectors from "../redux/selectors";
import styled from "styled-components";
import getClosestNumbers from "../services/closestNumbers";

const Td = styled.td`
  background: ${props => props.background};
  cursor: pointer;
`;

class ArrayCell extends Component {
  render() {
    const {
      element,
      sum,
      sumHover,
      onIncrease,
      id,
      illuminated,
      array,
      numberQty,
      onHover
    } = this.props;

    let bg = "white";
    const percents = (element.amount / sum) * 100;
    if (illuminated.length > 0 && illuminated.includes(element)) {
      bg = "green";
    }
    if (sumHover) {
      bg = `linear-gradient(to top, #fff200, #1e9600 ${percents}%, transparent ${percents}%)`;
    }
    return (
      <Td
        onClick={onIncrease}
        background={bg}
        id={id}
        onMouseEnter={e => {
          const closestNumbers = getClosestNumbers(array, element, numberQty);
          onHover(closestNumbers);
        }}
        onMouseLeave={() => {
          onHover([]);
        }}
      >
        {sumHover ? percents.toFixed(1) + "%" : element.amount}
      </Td>
    );
  }
}

const mapStateToProps = (state, { id, lineId }) => {
  return {
    array: selectors.getArray(state),
    numberQty: selectors.getNumbersQty(state),
    illuminated: selectors.getIlluminated(state),
    element: selectors.getCell(state, id, lineId)
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onIncrease: () => dispatch(actions.increase(id)),
    onHover: closestNumbers => dispatch(actions.illuminate(closestNumbers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayCell);
