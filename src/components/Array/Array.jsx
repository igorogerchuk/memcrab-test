import React, { useState } from "react";
import { connect } from "react-redux";
import ArrayRow from "../ArrayRow";
import AvarageRow from "../AvarageRow";
import AddRowButton from "../AddRowButton";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";
import getClosestNumbers from "../../services/closestNumbers";

const Array = ({ array, rows, cells, illuminatedQty }) => {
  const [illuminated, setIlluminated] = useState({});

  const hoverOnHandler = e => {
    const { id } = e.target;
    const closestNumbers = getClosestNumbers(cells, id, illuminatedQty);
    setIlluminated(closestNumbers);
  };

  const hoverOffHandler = e => {
    setIlluminated({});
  };

  return (
    array.length > 0 && (
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            {array.map(rowId => (
              <ArrayRow
                key={rowId}
                id={rowId}
                row={rows[rowId]}
                cells={cells}
                onHover={hoverOnHandler}
                offHover={hoverOffHandler}
                illuminated={illuminated}
              />
            ))}
            {/* <AvarageRow /> */}
            {/* <tr>
                 <td className={styles.addCell} colSpan={columnQty}>
                  <AddRowButton />
                </td> 
              </tr> */}
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
  illuminatedQty: selectors.getIlluminatedQty(state)
  // columnQty: selectors.getColumnsQty(state)
});

export default connect(mapStateToProps)(React.memo(Array));
