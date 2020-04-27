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
    const cellsIds = Object.keys(rows).map((rowId: string) => rows[rowId]);
    const sumColumn = cellsIds.map((row: $ReadOnlyArray<string>) =>
      row.reduce((acc, id) => (acc += cells[id].amount), 0)
    );
    return sumColumn;
  }
);

export const getAverageRow = createSelector<State, *, *, *, *, *>(
  [getRows, getCells, getColumnsQty],
  (rows, cells, columnsQty) => {
    const cellsIds = Object.keys(rows).map((rowId: string) => rows[rowId]);
    const rowsQty = cellsIds.length;
    const averageRow = cellsIds.reduce(
      (acc: Array<number>, row: $ReadOnlyArray<string>) =>
        row.map((id, index) => (acc[index] += cells[id].amount / rowsQty)),
      new Array(columnsQty).fill(0)
    );
    return averageRow;
  }
);
