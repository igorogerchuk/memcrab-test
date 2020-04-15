import reducer from "../reducer";
import * as types from "../types";
import { createStore } from "redux";
import createRandomArray from "../../services/randomArray";

describe("reducer should return the right state with specific action", () => {
  const { array, rows, cells } = createRandomArray(5, 4);

  const store = createStore(reducer);

  test("SAVE_PARAMS", () => {
    const params = { n: 4, x: 3 };
    const action = {
      type: types.SAVE_PARAMS,
      payload: { params },
    };
    store.dispatch(action);
    expect(store.getState().params).toEqual(params);
  });

  test("SAVE_ARRAY", () => {
    const action = {
      type: types.SAVE_ARRAY,
      payload: { array },
    };
    store.dispatch(action);
    expect(store.getState().array).toEqual(array);
  });

  test("SAVE_ROWS", () => {
    const action = {
      type: types.SAVE_ROWS,
      payload: { rows },
    };
    store.dispatch(action);
    expect(store.getState().rows).toEqual(rows);
  });

  test("SAVE_CELLS", () => {
    const action = {
      type: types.SAVE_CELLS,
      payload: { cells },
    };
    store.dispatch(action);
    expect(store.getState().cells).toEqual(cells);
  });

  test("REMOVE_ROW", () => {
    const id = Object.keys(rows)[0];
    const action = {
      type: types.REMOVE_ROW,
      payload: { id, cellsIds: rows[id] },
    };
    store.dispatch(action);
    expect(store.getState().array.length).toEqual(4);
    expect(store.getState().rows[id]).toEqual(undefined);
    expect(Object.keys(store.getState().cells).length).toEqual(16);
  });

  test("ADD_ROW", () => {
    const addedRow = createRandomArray(1, 4);
    const action = {
      type: types.ADD_ROW,
      payload: {
        array: addedRow.array,
        row: addedRow.rows,
        cells: addedRow.cells,
      },
    };
    store.dispatch(action);
    expect(store.getState().array.length).toEqual(5);
    expect(Object.keys(store.getState().rows).length).toEqual(5);
    expect(Object.keys(store.getState().cells).length).toEqual(20);
  });

  test("INCREASE", () => {
    const id = Object.keys(cells)[19];
    const prevAmount = cells[id].amount;
    const action = {
      type: types.INCREASE,
      payload: { id },
    };
    store.dispatch(action);
    expect(store.getState().cells[id].amount).toEqual(prevAmount + 1);
  });
});
