import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as selectors from "../../redux/selectors";
import ArrayCell from "../ArrayCell";
import SumCell from "../SumCell";
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

  shouldComponentUpdate(nextProps, nextState) {
    const { sumHover } = this.state;
    const { illuminated, line } = this.props;

    if (nextState.sumHover !== sumHover) {
      return true;
    }
    for (let i = 0; i < line.cells.length; i++) {
      if (
        illuminated[line.cells[i].id] !==
        nextProps.illuminated[line.cells[i].id]
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    console.log("row");
    const {
      line,
      onRemove,
      id,
      array,
      numberQty,
      illuminated,
      sum,
      onHover
    } = this.props;
    const { sumHover } = this.state;

    return (
      <tr id={id}>
        {line.cells.map(element => (
          <ArrayCell
            sumHover={sumHover}
            key={element.id}
            element={element}
            array={array}
            numberQty={numberQty}
            illuminated={illuminated}
            sum={sum}
            onHover={onHover}
            // id={element.id}
            // lineId={id}
          />
        ))}
        <SumCell onHover={this.hoverHandler} id={id} />
        <td className={styles.removeButtonTd}>
          <button className={styles.removeButton} onClick={onRemove}>
            &times;
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    line: selectors.getLine(state, id),

    array: selectors.getArray(state),
    numberQty: selectors.getNumbersQty(state),
    illuminated: selectors.getIlluminated(state),
    sum: selectors.getSum(state, id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(actions.removeLine(ownProps.id)),

    onHover: closestNumbers => dispatch(actions.illuminate(closestNumbers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayRow);
