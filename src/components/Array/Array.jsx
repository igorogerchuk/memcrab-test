import React from "react";
import { connect } from "react-redux";
import ArrayRow from "../ArrayRow";
import AvarageRow from "../AvarageRow";
import AddLineButton from "../AddLineButton";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";

const Array = ({ array, columnQty }) => {
  console.log("array");

  return (
    array.length > 0 && (
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            {array.map(line => (
              <ArrayRow key={line.id} id={line.id} />
            ))}
            <AvarageRow />
            <tr>
              <td className={styles.addCell} colSpan={columnQty}>
                <AddLineButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
};

const mapStateToProps = state => {
  return {
    array: selectors.getArray(state),
    columnQty: selectors.getColumnsQty(state)
  };
};

export default connect(mapStateToProps)(React.memo(Array));
