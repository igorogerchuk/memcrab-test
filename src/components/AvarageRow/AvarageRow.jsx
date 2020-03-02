import React from "react";
import { connect } from "react-redux";
import styles from "./AvarageRow.module.css";
import * as selectors from "../../redux/selectors";

const AvarageRow = ({ averageRow }) => (
  <tr>
    {averageRow.map(element => {
      return (
        <td className={styles.avarageTd} key={element.id} id={element.id}>
          {element.amount}
        </td>
      );
    })}
  </tr>
);

const mapStateToProps = state => {
  return {
    averageRow: selectors.getAvarageRow(state)
  };
};

export default connect(mapStateToProps)(AvarageRow);
