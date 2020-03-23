import types from "./types";

export const removeRow = (id, cellsIds) => {
  return {
    type: types.REMOVE_ROW,
    payload: { id, cellsIds }
  };
};

export const addRow = (rowId, row, cells) => {
  return {
    type: types.ADD_ROW,
    payload: { rowId, row, cells }
  };
};

export const saveArray = array => {
  return {
    type: types.SAVE_ARRAY,
    payload: { array }
  };
};

export const saveRows = rows => {
  return {
    type: types.SAVE_ROWS,
    payload: { rows }
  };
};

export const saveCells = cells => {
  return {
    type: types.SAVE_CELLS,
    payload: { cells }
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
