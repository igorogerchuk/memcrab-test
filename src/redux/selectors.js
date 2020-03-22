import { createSelector } from "reselect";

export const getArray = state => state.array;

// export const getColumnsQty = state => Number(state.params.n);

export const getIlluminatedQty = state => Number(state.params.x);

// export const getIlluminated = state => state.illuminated;

export const getRow = (state, id) => state.rows[id];

export const getCell = (state, id) => state.cells[id];

export const getCells = state => state.cells;

export const getSum = (state, id) => {
  return getRow(state, id).cells.reduce(
    (sum, element) => (sum += element.amount),
    0
  );
};

const uuidv4 = require("uuid/v4");

export const getAvarageRow = createSelector([getArray], array => {
  const avarageRow = [];
  for (let j = 0; j < array[j].length; j++) {
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
});
