// @flow
import React from "react";
import "./SumCell.module.css";

type ownProps = {|
  onHover: (e: SyntheticEvent<HTMLTableCellElement>) => void,
  sum: number,
  id: string,
|};

const areEqual = ({ sum }, nextProps) => {
  if (nextProps.sum !== sum) {
    return false;
  }
  return true;
};

const SumCell = ({ sum, onHover, id }: ownProps) => (
  <td id={id} onMouseEnter={onHover} onMouseLeave={onHover} styleName="sumCell">
    {sum}
  </td>
);
export default React.memo<ownProps>(SumCell, areEqual);
