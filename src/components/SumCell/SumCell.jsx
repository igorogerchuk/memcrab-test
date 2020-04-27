// @flow
import React from "react";
import "./SumCell.module.css";

type ownProps = {|
  onHover: (e: SyntheticEvent<HTMLTableCellElement>) => void,
  sum: number,
|};

const areEqual = ({ sum }, nextProps) => {
  if (nextProps.sum !== sum) {
    return false;
  }
  return true;
};

const SumCell = ({ sum, onHover }: ownProps) => (
  <td onMouseEnter={onHover} onMouseLeave={onHover} styleName="sumCell">
    {sum}
  </td>
);
export default React.memo<ownProps>(SumCell, areEqual);
