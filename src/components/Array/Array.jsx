import React, { Component } from "react";
import { connect } from "react-redux";
import ArrayLine from "../ArrayLine";
import AvarageRow from "../AvarageRow";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";
// import getClosestNumbers from "../../services/closestNumbers";

class Array extends Component {
  // state = { hover: false, closestNumbers: [] };

  // illuminateHandler = e => {
  // const { id } = e.target;
  // if (id.slice(0, 6) !== "number") {
  //   return;
  // }
  // const { array, numberQty } = this.props;
  // this.setState(state => {
  //   return {
  //     hover: !state.hover,
  //     closestNumbers: !state.hover
  //       ? getClosestNumbers(array, id, numberQty)
  //       : []
  //   };
  // });
  // };

  render() {
    const { array } = this.props;
    // const { closestNumbers } = this.state;

    return (
      <div>
        <table
          className={styles.matrix}
          // onMouseOver={this.illuminateHandler}
          // onMouseOut={this.illuminateHandler}
        >
          <tbody>
            {array.map(line => (
              <ArrayLine
                key={line.id}
                id={line.id}
                line={line.cells}
                // closestNumbers={closestNumbers}
              />
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
    array: selectors.getArray(state)
    // numberQty: selectors.getNumbersQty(state)
  };
};

export default connect(mapStateToProps)(Array);
