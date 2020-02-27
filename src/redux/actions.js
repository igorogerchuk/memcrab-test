import types from "./types";

export const removeLine = id => {
  return {
    type: types.REMOVE_LINE,
    payload: { id }
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

export const saveParams = params => {
  return {
    type: types.SAVE_PARAMS,
    payload: { params }
  };
};

export const illuminateElements = elements => {
  return {
    type: types.ILLUMINATE,
    payload: { elements }
  };
};
