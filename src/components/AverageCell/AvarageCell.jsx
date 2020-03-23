import React from "react";
import styles from "./AvarageCell.module.css";

const AvarageCell = ({ averageCell }) => (
  <td className={styles.avarageTd}>{averageCell}</td>
);

export default React.memo(AvarageCell);
