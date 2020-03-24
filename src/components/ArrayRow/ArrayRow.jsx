import React, { useState } from "react";
import ArrayCell from "../ArrayCell";
import SumCell from "../SumCell";
import styles from "./ArrayRow.module.css";

const areEqual = ({ illuminated, row, cells }, nextProps) => {
  for (let cellId of row) {
    if (nextProps.illuminated[cellId] !== illuminated[cellId]) {
      return false;
    }
    if (nextProps.cells[cellId].amount !== cells[cellId].amount) {
      return false;
    }
  }
  return true;
};

const ArrayRow = ({
  row,
  id,
  onHover,
  offHover,
  illuminated,
  cells,
  onIncrease,
  sumCell,
  onRemove
}) => {
  const [sumHover, setSumHover] = useState(false);

  const hoverHandler = () => setSumHover(sumHover => !sumHover);

  return (
    <tr id={id}>
      {row.map(cellId => (
        <ArrayCell
          sumHover={sumHover}
          sum={sumCell}
          key={cellId}
          id={cellId}
          onHover={onHover}
          offHover={offHover}
          illuminated={illuminated}
          cell={cells[cellId]}
          onIncrease={onIncrease}
        />
      ))}
      <SumCell onHover={hoverHandler} sum={sumCell} />
      <td className={styles.removeButtonTd}>
        <button className={styles.removeButton} onClick={onRemove}>
          &times;
        </button>
      </td>
    </tr>
  );
};

export default React.memo(ArrayRow, areEqual);
