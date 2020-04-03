// @flow
import React, { useState } from "react";
import ArrayCell from "../ArrayCell";
import SumCell from "../SumCell";
import "./ArrayRow.module.css";
import type { CellsState } from "../../redux/types";

type ownProps = {|
  row: $ReadOnlyArray<string>,
  id: string,
  onHover: (e: SyntheticEvent<HTMLTableCellElement>) => void,
  offHover: () => void,
  illuminated: { [id: string]: boolean },
  cells: CellsState,
  onIncrease: (e: SyntheticEvent<HTMLTableCellElement>) => void,
  sumCell: number,
  onRemove: (e: SyntheticEvent<HTMLButtonElement>) => void
|};

const areEqual = ({ illuminated, row, cells }, nextProps) => {
  for (let cellId of row) {
    if (nextProps.illuminated[cellId] !== illuminated[cellId]) {
      return false;
    }
    if (nextProps.cells[cellId].amount !== cells[cellId].amount) {
      return false;
    }
  }
  return true;
};

const ArrayRow = ({
  row,
  id,
  onHover,
  offHover,
  illuminated,
  cells,
  onIncrease,
  sumCell,
  onRemove
}: ownProps) => {
  const [sumHover, setSumHover] = useState(false);

  const hoverHandler = () => setSumHover(sumHover => !sumHover);

  return (
    <tr id={id}>
      {row.map(cellId => (
        <ArrayCell
          sumHover={sumHover}
          sum={sumCell}
          key={cellId}
          id={cellId}
          onHover={onHover}
          offHover={offHover}
          illuminated={illuminated}
          cell={cells[cellId]}
          onIncrease={onIncrease}
        />
      ))}
      <SumCell onHover={hoverHandler} sum={sumCell} />
      <td styleName="removeButtonTd">
        <button styleName="removeButton" onClick={onRemove} id={id}>
          &times;
        </button>
      </td>
    </tr>
  );
};

export default React.memo<ownProps>(ArrayRow, areEqual);
