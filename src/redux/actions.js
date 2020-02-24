import types from "./types";

export const removeLine = line => {
  return {
    type: types.REMOVE_LINE,
    payload: { line }
  };
};

export const addLine = newLine => {
  return {
    type: types.ADD_LINE,
    payload: { newLine }
  };
};

export const saveArray = array => {
  return {
    type: types.SAVE_ARRAY,
    payload: { array }
  };
};

export const increase = id => {
  return {
    type: types.INCREASE,
    payload: { id }
  };
};
