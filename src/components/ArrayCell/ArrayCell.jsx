import React from "react";
import styles from "./ArrayCell.module.css";

const areEqual = ({ illuminated, id, cell, sumHover }, nextProps) => {
  if (nextProps.illuminated[id] !== illuminated[id]) {
    return false;
  }

  if (nextProps.cell.amount !== cell.amount) {
    return false;
  }

  if (nextProps.sumHover !== sumHover) {
    return false;
  }

  return true;
};

const ArrayCell = ({
  cell,
  id,
  onHover,
  offHover,
  illuminated,
  onIncrease,
  sumHover,
  sum
}) => {
  let style = {
    background:
      "linear-gradient(110deg,#eee 0%,#e3e3e3 10%,#fff 20%,#fff 25%,#f0f0f0 26%,#fff 28%,#ddd 55%,#eee 100%)"
  };
  let value = cell.amount;

  if (illuminated[id]) {
    style.background =
      "linear-gradient(110deg, #f90c04 0%, #ed413b 10%, #fff 20%, #fff 25%, #f0f0f0 26%, #fff 28%, #f53d37 55%, #f90c04 100%)";
  }

  if (sumHover) {
    const percents = (cell.amount / sum) * 100;
    style.background = `linear-gradient(to top, #fff200, #1e9600 ${percents}%, transparent ${percents}%)`;
    value = percents.toFixed(1) + "%";
  }

  return (
    <td
      className={styles.simpleTd}
      onClick={onIncrease}
      id={id}
      onMouseEnter={onHover}
      onMouseLeave={offHover}
      style={style}
    >
      {value}
    </td>
  );
};

export default React.memo(ArrayCell, areEqual);
