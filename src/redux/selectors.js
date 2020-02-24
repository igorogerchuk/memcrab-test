export const getArray = state => state.array;

export const getColumnsQty = state => getArray(state)[0].length;
