import React, { PureComponent } from "react";
import { connect } from "react-redux";
import ArrayRow from "../ArrayRow";
import AvarageRow from "../AvarageRow";
import AddRowButton from "../AddRowButton";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";
import getClosestNumbers from "../../services/closestNumbers";

class Array extends PureComponent {
  state = { illuminated: {} };

  hoverOnHandler = e => {
    const { illuminatedQty, cells } = this.props;
    const { id } = e.target;
    const closestNumbers = getClosestNumbers(cells, id, illuminatedQty);
    this.setState({ illuminated: closestNumbers });
  };

  hoverOffHandler = e => {
    this.setState({ illuminated: {} });
  };

  render() {
    console.log("array");
    const { array, rows, cells } = this.props;
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
                  onHover={this.hoverOnHandler}
                  offHover={this.hoverOffHandler}
                  illuminated={this.state.illuminated}
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
  }
}

const mapStateToProps = state => ({
  array: selectors.getArray(state),
  rows: selectors.getRows(state),
  cells: selectors.getCells(state),
  illuminatedQty: selectors.getIlluminatedQty(state)
  // columnQty: selectors.getColumnsQty(state)
});

export default connect(mapStateToProps)(Array);
