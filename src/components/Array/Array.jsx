import React, { Component } from "react";
import { connect } from "react-redux";
import ArrayLine from "../ArrayLine";
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
  return { array: selectors.getArray(state) };
};

export default connect(mapStateToProps)(Array);
