import store from "../store";

it("should ", () => {
  const initialState = { array: [], rows: {}, cells: {}, params: {} };
  expect(store.getState()).toEqual(initialState);
});
