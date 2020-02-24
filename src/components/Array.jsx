import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../redux/selectors";
import ArrayLine from "./ArrayLine";
import AvarageRow from "./AvarageRow";
const uuidv4 = require("uuid/v4");

class Array extends Component {
  render() {
    const { array } = this.props;
    return (
      <div>
        <table>
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
