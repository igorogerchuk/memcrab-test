import React, { Component } from "react";
import { connect } from "react-redux";
import getAvarageRow from "../../services/avarageRow";
import styles from "./AvarageRow.module.css";
import * as selectors from "../../redux/selectors";

class AvarageRow extends Component {
  render() {
    const { array } = this.props;
    return (
      <tr className={styles.avarage}>
        {getAvarageRow(array).map(element => {
          return (
            <td key={element.id} id={element.id}>
              {element.amount}
            </td>
          );
        })}
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return { array: selectors.getArray(state) };
};

export default connect(mapStateToProps)(AvarageRow);
