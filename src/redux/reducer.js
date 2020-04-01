// @flow
import types from "./types";
import { combineReducers } from "redux";
import type { Action } from "./actions";
import type { Reducer } from "redux";

export type ArrayState = $ReadOnlyArray<string>;

const arrayReducer = (state: ArrayState = [], action: Action): ArrayState => {
  switch (action.type) {
    case types.ADD_ROW:
      return [...state, ...action.payload.rowId];
    case types.REMOVE_ROW:
      return state.filter(rowId => rowId !== action.payload.id);
    case types.SAVE_ARRAY:
      return action.payload.array;
    default:
      return state;
  }
};

export type RowsState = $ReadOnly<{
  [key: string]: $ReadOnlyArray<string>
}>;

const rowsReducer = (state: RowsState = {}, action: Action): RowsState => {
  switch (action.type) {
    case types.ADD_ROW:
      return { ...state, ...action.payload.row };
    case types.REMOVE_ROW:
      const { [action.payload.id]: deleted, ...withoutDeleted } = state;
      return withoutDeleted;
    case types.SAVE_ROWS:
      return action.payload.rows;
    default:
      return state;
  }
};

export type CellsState = $ReadOnly<{
  [key: string]: $ReadOnly<{ id: string, amount: number }>
}>;

const cellsReducer = (state: CellsState = {}, action: Action): CellsState => {
  switch (action.type) {
    case types.ADD_ROW:
      return { ...state, ...action.payload.cells };
    case types.REMOVE_ROW:
      const withoutDeleted = action.payload.cellsIds.reduce((acc, cellId) => {
        const { [cellId]: deleted, ...withoutDeleted } = acc;
        return withoutDeleted;
      }, state);
      return withoutDeleted;
    case types.SAVE_CELLS:
      return action.payload.cells;
    case types.INCREASE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          amount: state[action.payload.id].amount + 1
        }
      };
    default:
      return state;
  }
};

export type ParamsState = $ReadOnly<{ n: number, x: number }>;

const paramsReducer = (
  state: ParamsState = {},
  action: Action
): ParamsState => {
  switch (action.type) {
    case types.SAVE_PARAMS:
      return action.payload.params;
    default:
      return state;
  }
};

type State = {
  array: ArrayState,
  rows: RowsState,
  cells: CellsState,
  params: ParamsState
};

const reducer: Reducer<State, Action> = combineReducers({
  array: arrayReducer,
  rows: rowsReducer,
  cells: cellsReducer,
  params: paramsReducer
});

export default reducer;
