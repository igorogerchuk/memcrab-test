// @flow
export const SAVE_PARAMS = "SAVE_PARAMS";
export const SAVE_ARRAY = "SAVE_ARRAY";
export const SAVE_ROWS = "SAVE_ROWS";
export const SAVE_CELLS = "SAVE_CELLS";
export const REMOVE_ROW = "REMOVE_ROW";
export const ADD_ROW = "ADD_ROW";
export const INCREASE = "INCREASE";

export type ArrayState = $ReadOnlyArray<string>;
export type RowsState = $ReadOnly<{
  [key: string]: $ReadOnlyArray<string>
}>;
export type CellsState = $ReadOnly<{
  [key: string]: $ReadOnly<{ id: string, amount: number }>
}>;
export type ParamsState = $ReadOnly<{ n: number, x: number }>;
