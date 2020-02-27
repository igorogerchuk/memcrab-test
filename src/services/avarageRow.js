const uuidv4 = require("uuid/v4");

const getAvarageRow = array => {
  const avarageRow = [];
  const columnQty = array[0].cells.length;
  for (let j = 0; j < columnQty; j++) {
    let columnTotal = 0;
    for (let i = 0; i < array.length; i++) {
      columnTotal += array[i].cells[j].amount;
    }
    avarageRow.push({
      id: uuidv4(),
      amount: (columnTotal / columnQty).toFixed(2)
    });
  }
  return avarageRow;
};

export default getAvarageRow;
