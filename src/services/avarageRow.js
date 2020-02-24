const getAvarageRow = array => {
  const avarageRow = [];
  const columnQty = array[0].length;
  for (let j = 0; j < columnQty; j++) {
    let columnTotal = 0;
    for (let i = 0; i < array.length; i++) {
      columnTotal += array[i][j].amount;
    }
    avarageRow.push((columnTotal / columnQty).toFixed(2));
  }
  return avarageRow;
};

export default getAvarageRow;
