const getClosestNumbers = (cells, pointId, illuminatedQty) => {
  const {
    [pointId]: {},
    ...cellsWithoutPoint
  } = cells;
  const cellsArray = Object.values(cellsWithoutPoint);

  if (illuminatedQty < cellsArray.length) {
    const pointCell = cells[pointId];
    cellsArray.sort(
      (a, b) =>
        Math.abs(a.amount - pointCell.amount) -
        Math.abs(b.amount - pointCell.amount)
    );
  }

  const closestNumbers = cellsArray.slice(0, illuminatedQty);

  const closestNumbersIds = closestNumbers.reduce(
    (acc, cell) => ({ ...acc, [cell.id]: true }),
    {}
  );

  return { [pointId]: true, ...closestNumbersIds };
};

export default getClosestNumbers;
