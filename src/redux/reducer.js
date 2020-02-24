import types from "./types";

const reducer = (state = { array: [] }, { type, payload }) => {
  const { array } = state;
  switch (type) {
    case types.ADD_LINE:
      return {
        array: array.concat(payload.newLine)
      };
    case types.REMOVE_LINE:
      return {
        array: array.filter(line => line !== payload.line)
      };
    case types.SAVE_ARRAY:
      return { array: payload.array };
    default:
      return state;
  }
};

export default reducer;
