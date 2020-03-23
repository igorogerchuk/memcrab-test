import types from "./types";
import { combineReducers } from "redux";

const arrayReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_ROW:
      return [...state, ...payload.rowId];
    case types.REMOVE_ROW:
      return state.filter(rowId => rowId !== payload.id);
    case types.SAVE_ARRAY:
      return payload.array;
    default:
      return state;
  }
};

const rowsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.ADD_ROW:
      return { ...state, ...payload.row };
    case types.REMOVE_ROW:
      const { [payload.id]: deleted, ...withoutDeleted } = state;
      return withoutDeleted;
    case types.SAVE_ROWS:
      return payload.rows;
    default:
      return state;
  }
};

const cellsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.ADD_ROW:
      return { ...state, ...payload.cells };
    case types.REMOVE_ROW:
      const withoutDeleted = payload.cellsIds.reduce((acc, cellId) => {
        const { [cellId]: deleted, ...withoutDeleted } = acc;
        return withoutDeleted;
      }, state);
      return withoutDeleted;
    case types.SAVE_CELLS:
      return payload.cells;
    case types.INCREASE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          amount: state[payload.id].amount + 1
        }
      };
    default:
      return state;
  }
};

const paramsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SAVE_PARAMS:
      return action.payload.params;
    default:
      return state;
  }
};

const reducer = combineReducers({
  array: arrayReducer,
  rows: rowsReducer,
  cells: cellsReducer,
  params: paramsReducer
});

export default reducer;
