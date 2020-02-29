import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import styled from "styled-components";
import * as selectors from "../redux/selectors";
import ArrayCell from "./ArrayCell";

const TdSum = styled.td`
  background-color: cadetblue;
  cursor: pointer;
`;

class ArrayRow extends Component {
  state = { sumHover: false, sum: 0 };

  hoverHandler = e => {
    const value = Number(e.target.innerText);
    this.setState(state => {
      return {
        sumHover: !state.sumHover,
        sum: value
      };
    });
  };

  render() {
    const { line, onRemove, id } = this.props;
    const { sumHover, sum } = this.state;

    return (
      <tr id={id}>
        {line.cells.map(element => (
          <ArrayCell
            sumHover={sumHover}
            sum={sum}
            key={element.id}
            id={element.id}
            lineId={id}
          />
        ))}
        <TdSum
          onMouseEnter={this.hoverHandler}
          onMouseLeave={this.hoverHandler}
        >
          {line.cells.reduce((sum, element) => (sum += element.amount), 0)}
        </TdSum>
        <td>
          <button onClick={onRemove}>Remove</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    line: selectors.getLine(state, id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(actions.removeLine(ownProps.id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayRow);
