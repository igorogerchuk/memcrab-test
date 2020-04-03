// @flow

import * as types from "./types";
import type { ArrayState, RowsState, CellsState, ParamsState } from "./types";

type _ExtractReturn<R, F: (...args: any[]) => R> = R;
type ExtractReturn<F> = _ExtractReturn<*, F>;

export const removeRow = (id: string, cellsIds: $ReadOnlyArray<string>) => ({
  type: types.REMOVE_ROW,
  payload: { id, cellsIds }
});

export const addRow = (
  array: ArrayState,
  row: RowsState,
  cells: CellsState
) => ({
  type: types.ADD_ROW,
  payload: { array, row, cells }
});

export const saveArray = (array: ArrayState) => ({
  type: types.SAVE_ARRAY,
  payload: { array }
});

export const saveRows = (rows: RowsState) => ({
  type: types.SAVE_ROWS,
  payload: { rows }
});

export const saveCells = (cells: CellsState) => ({
  type: types.SAVE_CELLS,
  payload: { cells }
});

export const increase = (id: string) => ({
  type: types.INCREASE,
  payload: { id }
});

export const saveParams = (params: ParamsState) => ({
  type: types.SAVE_PARAMS,
  payload: { params }
});

export type Action =
  | ExtractReturn<typeof removeRow>
  | ExtractReturn<typeof addRow>
  | ExtractReturn<typeof saveArray>
  | ExtractReturn<typeof saveRows>
  | ExtractReturn<typeof saveCells>
  | ExtractReturn<typeof saveParams>
  | ExtractReturn<typeof increase>;
