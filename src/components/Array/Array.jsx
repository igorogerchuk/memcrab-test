import React, { useState } from "react";
import { connect } from "react-redux";
import ArrayRow from "../ArrayRow";
import AvarageRow from "../AvarageRow";
import * as selectors from "../../redux/selectors";
import * as actions from "../../redux/actions";
import getClosestNumbers from "../../services/closestNumbers";
import createRandomArray from "../../services/randomArray";
import styles from "./Array.module.css";

const Array = ({
  array,
  rows,
  cells,
  illuminatedQty,
  onIncrease,
  sumColumn,
  onRemove,
  onAdd,
  columnQty
}) => {
  const [illuminated, setIlluminated] = useState({});

  const hoverOnHandler = e => {
    const { id } = e.target;
    const closestNumbers = getClosestNumbers(cells, id, illuminatedQty);
    setIlluminated(closestNumbers);
  };

  const hoverOffHandler = () => {
    setIlluminated({});
  };

  const increaseHandler = e => {
    const { id } = e.target;
    onIncrease(id);
  };

  const removeHandler = e => {
    const { id } = e.target.parentNode.parentNode;
    onRemove(id, rows[id]);
  };

  const addHandler = () => {
    const { array, rows, cells } = createRandomArray(1, columnQty);
    onAdd(array, rows, cells);
  };

  return (
    array.length > 0 && (
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            {array.map((rowId, index) => (
              <ArrayRow
                key={rowId}
                id={rowId}
                row={rows[rowId]}
                cells={cells}
                onHover={hoverOnHandler}
                offHover={hoverOffHandler}
                illuminated={illuminated}
                onIncrease={increaseHandler}
                sumCell={sumColumn[index]}
                onRemove={removeHandler}
              />
            ))}
            <AvarageRow />
            <tr>
              <td className={styles.addCell} colSpan={columnQty}>
                <button className={styles.addButton} onClick={addHandler}>
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
};

const mapStateToProps = state => ({
  array: selectors.getArray(state),
  rows: selectors.getRows(state),
  cells: selectors.getCells(state),
  illuminatedQty: selectors.getIlluminatedQty(state),
  sumColumn: selectors.getSumColumn(state),
  columnQty: selectors.getColumnsQty(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: id => dispatch(actions.increase(id)),
    onRemove: (id, cellsIds) => dispatch(actions.removeRow(id, cellsIds)),
    onAdd: (rowId, row, cells) => dispatch(actions.addRow(rowId, row, cells))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Array));
