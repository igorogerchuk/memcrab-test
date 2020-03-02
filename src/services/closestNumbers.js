const getClosestNumbers = (array, element, numbersQty) => {
  let inlineArray = array.reduce((acc, line) => [...acc, ...line.cells], []);

  if (numbersQty >= inlineArray.length - 1) {
    return inlineArray;
  }

  inlineArray.sort(
    (a, b) =>
      Math.abs(a.amount - element.amount) - Math.abs(b.amount - element.amount)
  );
  const closestNumbers = inlineArray.slice(0, numbersQty + 1);

  const closestNumbersIds = closestNumbers.map(element => element.id);

  if (closestNumbersIds.includes(element.id)) {
    return closestNumbersIds;
  }
  return [element.id, ...closestNumbersIds.slice(1, numbersQty + 1)];
};

export default getClosestNumbers;
