import { createSelector } from "reselect";

export const getArray = state => state.array;

export const getRows = state => state.rows;

export const getCells = state => state.cells;

export const getColumnsQty = state => Number(state.params.n);

export const getIlluminatedQty = state => Number(state.params.x);

export const getSumColumn = createSelector(
  [getRows, getCells],
  (rows, cells) => {
    const sumColumn = [];
    const cellsIds = Object.values(rows);
    for (let i = 0; i < cellsIds.length; i++) {
      let rowTotal = 0;
      for (let j = 0; j < cellsIds[i].length; j++) {
        rowTotal += cells[cellsIds[i][j]].amount;
      }
      sumColumn.push(rowTotal);
    }
    return sumColumn;
  }
);

export const getAvarageRow = createSelector(
  [getRows, getCells],
  (rows, cells) => {
    const avarageRow = [];
    const cellsIds = Object.values(rows);
    for (let j = 0; j < cellsIds[0].length; j++) {
      let columnTotal = 0;
      for (let i = 0; i < cellsIds.length; i++) {
        columnTotal += cells[cellsIds[i][j]].amount;
      }
      avarageRow.push((columnTotal / cellsIds.length).toFixed(2));
    }
    return avarageRow;
  }
);
