import types from "./types";

export const removeRow = id => {
  return {
    type: types.REMOVE_ROW,
    payload: { id }
  };
};

export const addRow = newRow => {
  return {
    type: types.ADD_ROW,
    payload: { newRow }
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

export const increase = (id, rowId) => {
  return {
    type: types.INCREASE,
    payload: { id, rowId }
  };
};

export const saveParams = params => {
  return {
    type: types.SAVE_PARAMS,
    payload: { params }
  };
};

// export const illuminate = illuminated => {
//   return {
//     type: types.ILLUMINATE,
//     payload: { illuminated }
//   };
// };
