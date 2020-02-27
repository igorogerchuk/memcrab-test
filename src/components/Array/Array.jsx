import React, { Component } from "react";
import { connect } from "react-redux";
import ArrayLine from "../ArrayLine";
import AvarageRow from "../AvarageRow";
import styles from "./Array.module.css";
import * as selectors from "../../redux/selectors";

const uuidv4 = require("uuid/v4");

class Array extends Component {
  render() {
    const { array } = this.props;
    return (
      <div>
        <table className={styles.matrix}>
          <tbody>
            {array.map(line => {
              let id = uuidv4();
              return <ArrayLine key={id} id={id} line={line} />;
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
