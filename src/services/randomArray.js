// @flow
const uuidv4 = require("uuid/v4");

const createRandomArray = (rowsQty: number, columnsQty: number) => {
  const array: Array<string> = Array.from({ length: rowsQty }, () => uuidv4());

  const cellsIds: Array<string> = Array.from(
    { length: rowsQty * columnsQty },
    () => uuidv4()
  );

  const rows: { [key: string]: Array<string> } = array.reduce(
    (acc, rowId, index) => (
      (acc[rowId] = cellsIds.slice(
        index * columnsQty,
        index * columnsQty + columnsQty
      )),
      acc
    ),
    {}
  );
  const cells: {
    [key: string]: { id: string, amount: number },
  } = cellsIds.reduce(
    (acc, cellId) => (
      (acc[cellId] = { id: cellId, amount: randomThreeDigitNumber() }), acc
    ),
    {}
  );

  return { array, rows, cells };
};
export default createRandomArray;

const randomThreeDigitNumber = () => Math.floor(Math.random() * 1000);
