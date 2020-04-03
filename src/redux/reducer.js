// @flow

import { combineReducers } from "redux";
import type { Reducer } from "redux";
import * as types from "./types";
import type {
  ArrayState,
  RowsState,
  CellsState,
  ParamsState,
  State
} from "./types";
import type { Action } from "./actions";

const arrayReducer = (state: ArrayState = [], action: Action): ArrayState => {
  switch (action.type) {
    case types.ADD_ROW:
      return [...state, ...action.payload.array];
    case types.REMOVE_ROW:
      return state.filter(rowId => rowId !== action.payload.id);
    case types.SAVE_ARRAY:
      return action.payload.array;
    default:
      return state;
  }
};

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

const cellsReducer = (state: CellsState = {}, action: Action): CellsState => {
  switch (action.type) {
    case types.ADD_ROW:
      return { ...state, ...action.payload.cells };
    case types.REMOVE_ROW:
      const withoutDeleted = { ...state };
      action.payload.cellsIds.forEach(cellId => delete withoutDeleted[cellId]);
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

const reducer: Reducer<State, Action> = combineReducers({
  array: arrayReducer,
  rows: rowsReducer,
  cells: cellsReducer,
  params: paramsReducer
});

export default reducer;
