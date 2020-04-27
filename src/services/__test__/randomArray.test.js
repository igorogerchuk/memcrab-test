import createRandomArray from "../randomArray";

const { array, rows, cells } = createRandomArray(5, 4);
const cellsIds = Object.values(rows);
const cellsValues = Object.values(cells);

it("array length should be 5", () => {
  expect(array.length).toBe(5);
});

it("cellsIds length should be 5", () => {
  expect(cellsIds.length).toBe(5);
});

it("cellsIds' element length should be 4", () => {
  expect(cellsIds[0].length).toBe(4);
});

it("cellsValues length should be 20", () => {
  expect(cellsValues.length).toBe(20);
});

it("cellsValues' element amount should be greater than 0 or equal", () => {
  expect(cellsValues[0].amount).toBeGreaterThan(0);
});

it("cellsValues' element amount should be less than 1000", () => {
  expect(cellsValues[0].amount).toBeLessThan(1000);
});
