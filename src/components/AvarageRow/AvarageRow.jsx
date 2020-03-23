import React from "react";
import { connect } from "react-redux";
import * as selectors from "../../redux/selectors";
import AverageCell from "../AverageCell";

const AvarageRow = ({ averageRow }) => (
  <tr>
    {averageRow.map((cell, index) => (
      <AverageCell key={index} averageCell={cell} />
    ))}
  </tr>
);

const mapStateToProps = state => {
  return {
    averageRow: selectors.getAvarageRow(state)
  };
};

export default connect(mapStateToProps)(AvarageRow);
