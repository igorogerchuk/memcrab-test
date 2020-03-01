import React, { Component } from "react";
import { connect } from "react-redux";
import ArrayRow from "../ArrayRow/ArrayRow";
import AvarageRow from "../AvarageRow";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";

class Array extends Component {
  render() {
    const { array } = this.props;

    return (
      <div>
        <table className={styles.matrix}>
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
    array: selectors.getArray(state)
  };
};

export default connect(mapStateToProps)(Array);
