import React from "react";
import { connect } from "react-redux";
import * as selectors from "../../redux/selectors";
import styles from "./SumCell.module.css";

const SumCell = ({ sum, onHover }) => (
  <td onMouseEnter={onHover} onMouseLeave={onHover} className={styles.sumCell}>
    {sum}
  </td>
);

const mapStateToProps = (state, { id }) => {
  return {
    sum: selectors.getSum(state, id)
  };
};

export default connect(mapStateToProps)(React.memo(SumCell));
