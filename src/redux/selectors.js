// @flow
import { createSelector } from "reselect";
import type { State } from "./types";

export const getArray = (state: State) => state.array;

export const getRows = (state: State) => state.rows;

export const getCells = (state: State) => state.cells;

export const getColumnsQty = (state: State) => state.params.n;

export const getIlluminatedQty = (state: State) => state.params.x;

export const getSumColumn = createSelector<State, *, *, *, *>(
  [getRows, getCells],
  (rows, cells) => {
    const sumColumn = [];
    const cellsIds = Object.keys(rows).map((rowId: string) => rows[rowId]);
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

export const getAvarageRow = createSelector<State, *, *, *, *>(
  [getRows, getCells],
  (rows, cells) => {
    const avarageRow = [];
    const cellsIds = Object.keys(rows).map((rowId: string) => rows[rowId]);
    for (let j = 0; j < cellsIds[0].length; j++) {
      let columnTotal = 0;
      for (let i = 0; i < cellsIds.length; i++) {
        columnTotal += cells[cellsIds[i][j]].amount;
      }
      avarageRow.push(columnTotal / cellsIds.length);
    }
    return avarageRow;
  }
);
