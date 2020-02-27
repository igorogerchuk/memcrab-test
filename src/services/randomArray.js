const uuidv4 = require("uuid/v4");

const createRandomArray = (lines, columns) => {
  const array = [];
  for (let i = 0; i < lines; i++) {
    array[i] = { id: uuidv4(), cells: [] };
    for (let j = 0; j < columns; j++) {
      array[i].cells[j] = {
        id: "number" + uuidv4(),
        amount: Math.floor(Math.random() * 1000),
        illuminated: false
      };
    }
  }
  return array;
};

export default createRandomArray;
