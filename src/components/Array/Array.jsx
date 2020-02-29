import React, { Component } from "react";
import { connect } from "react-redux";
import ArrayRow from "../ArrayRow";
import AvarageRow from "../AvarageRow";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";
import * as actions from "../../redux/actions";
import getClosestNumbers from "../../services/closestNumbers";

class Array extends Component {
  render() {
    const { array, numberQty, onHover } = this.props;

    return (
      <div>
        <table
          className={styles.matrix}
          onMouseOver={e => {
            const { id, innerText } = e.target;
            if (id.slice(0, 6) !== "number") {
              return;
            }
            const value = Number(innerText);
            const closestNumbers = getClosestNumbers(array, value, numberQty);
            onHover(closestNumbers);
          }}
          onMouseOut={e => {
            onHover([]);
          }}
        >
          <tbody>
            {array.map(line => (
              <ArrayRow key={line.id} id={line.id} />
            ))}
            <AvarageRow />
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: selectors.getArray(state),
    numberQty: selectors.getNumbersQty(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHover: closestNumbers => dispatch(actions.illuminate(closestNumbers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Array);
