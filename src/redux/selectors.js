export const getArray = state => state.array;

export const getColumnsQty = state => Number(state.params.n);

export const getNumbersQty = state => Number(state.params.x);

export const getIlluminated = state => state.illuminated;

export const getLine = (state, id) => {
  return getArray(state).find(line => line.id === id);
};

export const getCell = (state, id, lineId) => {
  return getLine(state, lineId).cells.find(cell => cell.id === id);
};
