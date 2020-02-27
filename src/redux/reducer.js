import types from "./types";
import { combineReducers } from "redux";

const element = (state, { type, payload }) => {
  switch (type) {
    case types.INCREASE:
      return state.id === payload.id
        ? { ...state, amount: (state.amount += 1) }
        : state;
    case types.ILLUMINATE:
      for (const el of payload.elements) {
        if (state === el) {
          return { ...state, illuminated: !state.illuminated };
        }
      }
      return state;
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
      return state.map(el => element(el, action));
    case types.ILLUMINATE:
      return state.map(el => element(el, action));
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
      return state.map(l => {
        return { ...l, cells: line(l.cells, action) };
      });
    case types.ILLUMINATE:
      return state.map(l => {
        return { ...l, cells: line(l.cells, action) };
      });
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
  params: paramsReducer
});

export default reducer;
