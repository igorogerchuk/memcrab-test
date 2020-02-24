import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../redux/selectors";
import getAvarageRow from "../services/avarageRow";
const uuidv4 = require("uuid/v4");

class AvarageRow extends Component {
  render() {
    const { array } = this.props;
    return (
      <tr>
        {getAvarageRow(array).map(element => {
          return <td key={uuidv4()}>{element}</td>;
        })}
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return { array: selectors.getArray(state) };
};

export default connect(mapStateToProps)(AvarageRow);
