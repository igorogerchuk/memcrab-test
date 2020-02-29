const getClosestNumbers = (array, value, numbersQty) => {
  let inlineArray = array.reduce((acc, line) => [...acc, ...line.cells], []);

  if (numbersQty >= inlineArray.length) {
    return inlineArray;
  }

  inlineArray.sort(
    (a, b) => Math.abs(a.amount - value) - Math.abs(b.amount - value)
  );

  return inlineArray.slice(0, numbersQty + 1);
};

export default getClosestNumbers;
