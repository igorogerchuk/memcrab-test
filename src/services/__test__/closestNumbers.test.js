import closestNumbers from "../closestNumbers";

const cells = {
  id1: { id: "id1", amount: 1 },
  id2: { id: "id2", amount: 2 },
  id3: { id: "id3", amount: 3 },
  id4: { id: "id4", amount: 4 },
  id5: { id: "id5", amount: 5 },
  id6: { id: "id6", amount: 6 },
  id7: { id: "id7", amount: 7 },
  id8: { id: "id8", amount: 8 },
  id9: { id: "id9", amount: 9 },
};

it("should return 4 cells with closest amount and a point cell", () => {
  const pointId = "id1";
  const illuminatedQty = 4;
  const result = {
    id1: true,
    id2: true,
    id3: true,
    id4: true,
    id5: true,
  };
  expect(closestNumbers(cells, pointId, illuminatedQty)).toEqual(result);
});

it("should return all cells", () => {
  const pointId = "id1";
  const illuminatedQty = 10;
  const result = {
    id1: true,
    id2: true,
    id3: true,
    id4: true,
    id5: true,
    id6: true,
    id7: true,
    id8: true,
    id9: true,
  };
  expect(closestNumbers(cells, pointId, illuminatedQty)).toEqual(result);
});
