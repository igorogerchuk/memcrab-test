import React, { Component } from "react";
import { connect } from "react-redux";
import ArrayLine from "../ArrayLine";
import AvarageRow from "../AvarageRow";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";
import * as actions from "../../redux/actions";
import getClosestNumbers from "../../services/closestNumbers";

class Array extends Component {
  state = { hover: false };

  illuminateHandler = e => {
    const { id } = e.target;
    if (id.slice(0, 6) !== "number") {
      return;
    }
    const { array, numberQty, onHover } = this.props;
    const closestNumbers = this.state.hover
      ? []
      : getClosestNumbers(array, id, numberQty);
    this.setState(state => {
      return { hover: !state.hover };
    });
    onHover(closestNumbers);
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
            {array.map(line => (
              <ArrayLine key={line.id} id={line.id} line={line.cells} />
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
