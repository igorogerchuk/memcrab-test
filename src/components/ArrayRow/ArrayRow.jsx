import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as selectors from "../../redux/selectors";
import ArrayCell from "../ArrayCell";
import SumCell from "../SumCell";
import styles from "./ArrayRow.module.css";

class ArrayRow extends Component {
  // state = { sumHover: false };

  // hoverHandler = () => {
  //   this.setState(state => {
  //     return {
  //       sumHover: !state.sumHover
  //     };
  //   });
  // };

  shouldComponentUpdate(nextProps, nextState) {
    // const { sumHover } = this.state;

    // if (nextState.sumHover !== sumHover) {
    //   return true;
    // }
    const { illuminated, row } = this.props;
    for (let cellId of row) {
      if (nextProps.illuminated[cellId] !== illuminated[cellId]) {
        return true;
      }
    }
    return false;
  }

  render() {
    // console.log("row");
    const {
      row,
      onRemove,
      id,
      onHover,
      offHover,
      illuminated,
      cells
    } = this.props;
    // const { sumHover } = this.state;

    return (
      <tr id={id}>
        {row.map(cellId => (
          <ArrayCell
            // sumHover={sumHover}
            key={cellId}
            id={cellId}
            onHover={onHover}
            offHover={offHover}
            illuminated={illuminated}
            cell={cells[cellId]}
          />
        ))}
        {/* <SumCell onHover={this.hoverHandler} id={id} /> */}
        {/* <td className={styles.removeButtonTd}>
          <button className={styles.removeButton} onClick={onRemove}>
            &times;
          </button>
        </td> */}
      </tr>
    );
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    row: selectors.getRow(state, id),
    cells: selectors.getCells(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onRemove: () => dispatch(actions.removeRow(ownProps.id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayRow);

// export default ArrayRow;
