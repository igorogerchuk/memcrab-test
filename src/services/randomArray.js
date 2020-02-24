const uuidv4 = require("uuid/v4");

const createRandomArray = (lines, columns) => {
  const array = [];
  for (let i = 0; i < lines; i++) {
    array[i] = [];
    for (let j = 0; j < columns; j++) {
      array[i][j] = {
        id: uuidv4(),
        amount: Math.floor(Math.random() * 1000)
      };
    }
  }
  return array;
};

export default createRandomArray;
