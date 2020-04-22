import * as selectors from "../selectors";

const rows = {
  row1: ["cell1", "cell2", "cell3"],
  row2: ["cell4", "cell5", "cell6"],
};
const cells = {
  cell1: { id: "cell1", amount: 1 },
  cell2: { id: "cell2", amount: 2 },
  cell3: { id: "cell3", amount: 3 },
  cell4: { id: "cell4", amount: 4 },
  cell5: { id: "cell5", amount: 5 },
  cell6: { id: "cell6", amount: 6 },
};

it("getSumColumn should return an array with sums of cells amounts", () => {
  const result = selectors.getSumColumn.resultFunc(rows, cells);
  expect(result).toEqual([6, 15]);
});

it("getAverageRow should return an array with sums of cells amounts", () => {
  const result = selectors.getAverageRow.resultFunc(rows, cells, 3);
  expect(result).toEqual([2.5, 3.5, 4.5]);
});
