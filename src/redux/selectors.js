import { createSelector } from "reselect";

export const getArray = state => state.array;

export const getColumnsQty = state => Number(state.params.n);

export const getNumbersQty = state => Number(state.params.x);

export const getIlluminated = state => state.illuminated;

export const getLine = (state, id) => {
  return getArray(state).find(line => line.id === id);
};

export const getCell = (state, id, lineId) => {
  return getLine(state, lineId).cells.find(cell => cell.id === id);
};

export const getSum = (state, id) => {
  return getLine(state, id).cells.reduce(
    (sum, element) => (sum += element.amount),
    0
  );
};

const uuidv4 = require("uuid/v4");

export const getAvarageRow = createSelector(
  [getArray, getColumnsQty],
  (array, columnQty) => {
    const avarageRow = [];
    for (let j = 0; j < columnQty; j++) {
      let columnTotal = 0;
      for (let i = 0; i < array.length; i++) {
        columnTotal += array[i].cells[j].amount;
      }
      avarageRow.push({
        id: uuidv4(),
        amount: (columnTotal / array.length).toFixed(2)
      });
    }
    return avarageRow;
  }
);
