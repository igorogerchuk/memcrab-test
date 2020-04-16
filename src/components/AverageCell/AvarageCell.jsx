// @flow
import React from "react";
import "./AvarageCell.module.css";

type ownProps = {|
  averageCell: number,
|};

const AvarageCell = ({ averageCell }: ownProps) => (
  <td styleName="avarageTd">{averageCell.toFixed(2)}</td>
);
export default React.memo<ownProps>(AvarageCell);
