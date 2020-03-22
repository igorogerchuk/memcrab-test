const uuidv4 = require("uuid/v4");

const createRandomArray = (rowsQty, columnsQty) => {
  const array = [];
  const rows = {};
  const cells = {};

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
