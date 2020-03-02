import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as selectors from "../../redux/selectors";
import ArrayCell from "../ArrayCell/ArrayCell";
import styles from "./ArrayRow.module.css";

class ArrayRow extends Component {
  state = { sumHover: false };

  hoverHandler = () => {
    this.setState(state => {
      return {
        sumHover: !state.sumHover
      };
    });
  };

  render() {
    const { line, onRemove, id } = this.props;
    const { sumHover } = this.state;

    const sum = line.cells.reduce((sum, element) => (sum += element.amount), 0);
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
        <td
          onMouseEnter={this.hoverHandler}
          onMouseLeave={this.hoverHandler}
          className={styles.sumCell}
        >
          {sum}
        </td>
        <td class={styles.removeButtonTd}>
          <button class={styles.removeButton} onClick={onRemove}>
            &times;
          </button>
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
