// @flow
import type { CellsState } from "../redux/types";
const getClosestNumbers = (
  cells: CellsState,
  pointId: string,
  illuminatedQty: number
) => {
  const cellsWithoutPoint = { ...cells };
  delete cellsWithoutPoint[pointId];
  const cellsArray: Array<
    $ReadOnly<{ id: string, amount: number }>
  > = Object.keys(cellsWithoutPoint).map(
    (cell: string) => cellsWithoutPoint[cell]
  );

  if (illuminatedQty < cellsArray.length) {
    const pointCell = cells[pointId];
    cellsArray.sort(
      (a, b) =>
        Math.abs(a.amount - pointCell.amount) -
        Math.abs(b.amount - pointCell.amount)
    );
  }

  const closestNumbers = cellsArray.slice(0, illuminatedQty);

  const closestNumbersIds: { [id: string]: boolean } = closestNumbers.reduce(
    (acc, cell) => ({ ...acc, [cell.id]: true }),
    {}
  );

  return { [pointId]: true, ...closestNumbersIds };
};

export default getClosestNumbers;
