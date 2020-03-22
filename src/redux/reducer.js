import types from "./types";
import { combineReducers } from "redux";

// const element = (state, { type, payload }) => {
//   switch (type) {
//     case types.INCREASE:
//       return state.id === payload.id
//         ? { ...state, amount: state.amount + 1 }
//         : state;
//     default:
//       break;
//   }
// };

// const row = (state, action) => {
//   switch (action.type) {
//      case types.ADD_ROW:
//        return action.payload.newRow;
//     case types.REMOVE_ROW:
//       return state.id !== action.payload.id;
//     case types.INCREASE:
//       if (state.id === action.payload.rowId) {
//         return { ...state, cells: state.cells.map(el => element(el, action)) };
//       }
//       return state;
//     default:
//       break;
//   }
// };

const arrayReducer = (state = [], action) => {
  switch (action.type) {
    // case types.ADD_ROW:
    //   return [...state, ...row(undefined, action)];
    // case types.REMOVE_ROW:
    //   return state.filter(l => row(l, action));
    case types.SAVE_ARRAY:
      return action.payload.array;
    // case types.INCREASE:
    //   return state.map(l => row(l, action));
    default:
      return state;
  }
};

const rowsReducer = (state = {}, action) => {
  switch (action.type) {
    // case types.ADD_ROW:
    //   return [...state, ...row(undefined, action)];
    // case types.REMOVE_ROW:
    //   return state.filter(l => row(l, action));
    case types.SAVE_ROWS:
      return action.payload.rows;
    // case types.INCREASE:
    //   return state.map(l => row(l, action));
    default:
      return state;
  }
};

const cellsReducer = (state = {}, action) => {
  switch (action.type) {
    // case types.ADD_ROW:
    //   return [...state, ...row(undefined, action)];
    // case types.REMOVE_ROW:
    //   return state.filter(l => row(l, action));
    case types.SAVE_CELLS:
      return action.payload.cells;
    // case types.INCREASE:
    //   return state.map(l => row(l, action));
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

// const illuminatedReducer = (state = {}, action) => {
//   switch (action.type) {
//     case types.ILLUMINATE:
//       return action.payload.illuminated;
//     default:
//       return state;
//   }
// };

const reducer = combineReducers({
  array: arrayReducer,
  rows: rowsReducer,
  cells: cellsReducer,
  params: paramsReducer
  // illuminated: illuminatedReducer
});

export default reducer;
