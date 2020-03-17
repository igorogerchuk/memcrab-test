import types from "./types";
import { combineReducers } from "redux";

const element = (state, { type, payload }) => {
  switch (type) {
    case types.INCREASE:
      return state.id === payload.id
        ? { ...state, amount: state.amount + 1 }
        : state;
    default:
      break;
  }
};

const line = (state, action) => {
  switch (action.type) {
    case types.ADD_LINE:
      return action.payload.newLine;
    case types.REMOVE_LINE:
      return state.id !== action.payload.id;
    case types.INCREASE:
      if (state.id === action.payload.lineId) {
        return { ...state, cells: state.cells.map(el => element(el, action)) };
      }
      return state;
    default:
      break;
  }
};

const arrayReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_LINE:
      return [...state, ...line(undefined, action)];
    case types.REMOVE_LINE:
      return state.filter(l => line(l, action));
    case types.SAVE_ARRAY:
      return action.payload.array;
    case types.INCREASE:
      return state.map(l => line(l, action));
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

const illuminatedReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ILLUMINATE:
      return action.payload.illuminated;
    default:
      return state;
  }
};

const reducer = combineReducers({
  array: arrayReducer,
  params: paramsReducer,
  illuminated: illuminatedReducer
});

export default reducer;
