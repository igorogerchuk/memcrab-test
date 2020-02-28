import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import styled from "styled-components";
import * as selectors from "../redux/selectors";

const TdSum = styled.td`
  background-color: cadetblue;
  cursor: pointer;
`;

const Td = styled.td`
  background: ${props => props.background};
  cursor: pointer;
`;

class ArrayLine extends Component {
  state = { sumHover: false, sum: 0 };

  increaseHandler = e => {
    const { onIncrease } = this.props;
    onIncrease(e.target.id);
  };

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
    const { closestNumbers, line, onRemove } = this.props;
    const { sumHover, sum } = this.state;

    return (
      <tr>
        {line.map(element => {
          let bg = "white";
          const percents = (element.amount / sum) * 100;
          if (closestNumbers.includes(element)) {
            bg = "green";
          }
          if (sumHover) {
            bg = `linear-gradient(to top, #fff200, #1e9600 ${percents}%, transparent ${percents}%)`;
          }
          return (
            <Td
              key={element.id}
              id={element.id}
              onClick={this.increaseHandler}
              background={bg}
            >
              {sumHover ? percents.toFixed(1) + "%" : element.amount}
            </Td>
          );
        })}
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
    closestNumbers: selectors.getIlluminated(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(actions.removeLine(ownProps.id)),
    onIncrease: id => dispatch(actions.increase(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayLine);
