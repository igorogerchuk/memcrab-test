// @flow
const uuidv4 = require("uuid/v4");

const createRandomArray = (rowsQty: number, columnsQty: number) => {
  const array: Array<string> = [];
  const rows: { [key: string]: Array<string> } = {};
  const cells: { [key: string]: { id: string, amount: number } } = {};

  for (let i = 0; i < rowsQty; i++) {
    let rowId = uuidv4();
    array[i] = rowId;
    rows[rowId] = [];
    for (let j = 0; j < columnsQty; j++) {
      let cellId = uuidv4();
      rows[rowId][j] = cellId;
      cells[cellId] = { id: cellId, amount: randomThreeDigitNumber() };
    }
  }

  return { array, rows, cells };
};

export default createRandomArray;

const randomThreeDigitNumber = () => Math.floor(Math.random() * 1000);
