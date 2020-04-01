// @flow
import types from "./types";
import type { ArrayState, RowsState, CellsState, ParamsState } from "./reducer";

type RemoveRowAction = {
  type: typeof types.REMOVE_ROW,
  payload: { id: string, cellsIds: Array<string> }
};

export const removeRow = (
  id: string,
  cellsIds: Array<string>
): RemoveRowAction => ({
  type: types.REMOVE_ROW,
  payload: { id, cellsIds }
});

type AddRowAction = {
  type: typeof types.ADD_ROW,
  payload: { rowId: string, row: RowsState, cells: CellsState }
};

export const addRow = (
  rowId: string,
  row: RowsState,
  cells: CellsState
): AddRowAction => ({
  type: types.ADD_ROW,
  payload: { rowId, row, cells }
});

type SaveArrayAction = {
  type: typeof types.SAVE_ARRAY,
  payload: { array: ArrayState }
};

export const saveArray = (array: ArrayState): SaveArrayAction => ({
  type: types.SAVE_ARRAY,
  payload: { array }
});

type SaveRowsAction = {
  type: typeof types.SAVE_ROWS,
  payload: { rows: RowsState }
};

export const saveRows = (rows: RowsState): SaveRowsAction => ({
  type: types.SAVE_ROWS,
  payload: { rows }
});

type SaveCellsAction = {
  type: typeof types.SAVE_CELLS,
  payload: { cells: CellsState }
};

export const saveCells = (cells: CellsState): SaveCellsAction => ({
  type: types.SAVE_CELLS,
  payload: { cells }
});

type IncreaseAction = {
  type: typeof types.INCREASE,
  payload: { id: string }
};

export const increase = (id: string): IncreaseAction => ({
  type: types.INCREASE,
  payload: { id }
});

type SaveParamsAction = {
  type: typeof types.SAVE_PARAMS,
  payload: { params: ParamsState }
};

export const saveParams = (params: ParamsState): SaveParamsAction => ({
  type: types.SAVE_PARAMS,
  payload: { params }
});

export type Action =
  | RemoveRowAction
  | AddRowAction
  | SaveArrayAction
  | SaveRowsAction
  | SaveCellsAction
  | IncreaseAction
  | SaveParamsAction;
