import React from "react";
import styles from "./SumCell.module.css";

const areEqual = ({ sum }, nextProps) => {
  if (nextProps.sum !== sum) {
    return false;
  }
  return true;
};

const SumCell = ({ sum, onHover }) => (
  <td onMouseEnter={onHover} onMouseLeave={onHover} className={styles.sumCell}>
    {sum}
  </td>
);

export default React.memo(SumCell, areEqual);
