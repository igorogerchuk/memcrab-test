import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import styled from "styled-components";
import * as selectors from "../redux/selectors";

const TdSum = styled.td`
  background-color: cadetblue;
`;

const Td = styled.td`
  cursor: pointer;
  background-color: ${props => props.bgColor};
  background: ${props => props.bgPercents};
`;

class ArrayLine extends Component {
  state = { hover: false, sum: 0 };

  increaseHandler = e => {
    const { id } = e.target;
    if (id.slice(0, 6) !== "number") {
      return;
    }
    const { onIncrease } = this.props;
    onIncrease(e.target.id);
  };

  hoverHandler = e => {
    const value = Number(e.target.innerText);
    this.setState(state => {
      return {
        hover: !state.hover,
        sum: value
      };
    });
  };

  render() {
    const { closestNumbers, line, onRemove } = this.props;
    const { hover, sum } = this.state;

    return (
      <tr>
        {line.map(element => (
          <Td
            key={element.id}
            id={element.id}
            onClick={this.increaseHandler}
            bgColor={closestNumbers.includes(element) ? "green" : "white"}
            bgPercents={
              hover
                ? `linear-gradient(to top, red ${(element.amount / sum) *
                    100}%, transparent ${(element.amount / sum) * 100}%)`
                : "white"
            }
          >
            {hover
              ? ((element.amount / sum) * 100).toFixed(1) + "%"
              : element.amount}
          </Td>
        ))}
        <TdSum
          onMouseEnter={this.hoverHandler}
          onMouseLeave={this.hoverHandler}
        >
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
    array: selectors.getArray(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(actions.removeLine(ownProps.id)),
    onIncrease: id => dispatch(actions.increase(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayLine);
