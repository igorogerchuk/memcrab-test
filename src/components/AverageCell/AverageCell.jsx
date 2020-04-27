// @flow
import React from "react";
import "./AverageCell.module.css";

type ownProps = {|
  averageCell: number,
|};

const AverageCell = ({ averageCell }: ownProps) => (
  <td styleName="averageTd">{averageCell.toFixed(2)}</td>
);
export default React.memo<ownProps>(AverageCell);
