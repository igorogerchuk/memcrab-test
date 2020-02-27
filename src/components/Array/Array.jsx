import React, { Component } from "react";
import { connect } from "react-redux";
import ArrayLine from "../ArrayLine";
import AvarageRow from "../AvarageRow";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";
import getClosestNumbers from "../../services/closestNumbers";
import * as actions from "../../redux/actions";

class Array extends Component {
  illuminateHandler = e => {
    const { id } = e.target;
    if (id.slice(0, 6) !== "number") {
      return;
    }
    const { array, numberQty, onIlluminate } = this.props;
    onIlluminate(getClosestNumbers(array, id, numberQty));
  };

  render() {
    const { array } = this.props;
    return (
      <div>
        <table
          className={styles.matrix}
          onMouseOver={this.illuminateHandler}
          onMouseOut={this.illuminateHandler}
        >
          <tbody>
            {array.map(line => {
              return <ArrayLine key={line.id} id={line.id} line={line.cells} />;
            })}
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
    onIlluminate: elements => dispatch(actions.illuminateElements(elements))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Array);
