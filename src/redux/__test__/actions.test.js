import * as types from "../types";
import * as actions from "../actions";
import createRandomArray from "../../services/randomArray";

describe("action creater should return a specific action ", () => {
  const { array, rows, cells } = createRandomArray(1, 5);

  it("REMOVE_ROW", () => {
    const id = "rowId1";
    const cellsIds = ["cellId1", "cellId2", "cellId3"];
    const action = { type: types.REMOVE_ROW, payload: { id, cellsIds } };
    expect(actions.removeRow(id, cellsIds)).toEqual(action);
  });

  it("ADD_ROW", () => {
    const action = {
      type: types.ADD_ROW,
      payload: { array, row: rows, cells },
    };
    expect(actions.addRow(array, rows, cells)).toEqual(action);
  });

  it("SAVE_ARRAY", () => {
    const action = {
      type: types.SAVE_ARRAY,
      payload: { array },
    };
    expect(actions.saveArray(array)).toEqual(action);
  });

  it("SAVE_ARRAY", () => {
    const action = {
      type: types.SAVE_ARRAY,
      payload: { array },
    };
    expect(actions.saveArray(array)).toEqual(action);
  });

  it("SAVE_ROWS", () => {
    const action = {
      type: types.SAVE_ROWS,
      payload: { rows },
    };
    expect(actions.saveRows(rows)).toEqual(action);
  });

  it("SAVE_CELLS", () => {
    const action = {
      type: types.SAVE_CELLS,
      payload: { cells },
    };
    expect(actions.saveCells(cells)).toEqual(action);
  });

  it("INCREASE", () => {
    const id = "cellId1";
    const action = {
      type: types.INCREASE,
      payload: { id },
    };
    expect(actions.increase(id)).toEqual(action);
  });

  it("SAVE_PARAMS", () => {
    const params = { n: 5, x: 3 };
    const action = {
      type: types.SAVE_PARAMS,
      payload: { params },
    };
    expect(actions.saveParams(params)).toEqual(action);
  });
});
