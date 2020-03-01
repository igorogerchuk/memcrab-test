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

  if (closestNumbers.includes(element)) {
    return closestNumbers;
  }
  return [element, ...closestNumbers.slice(1, numbersQty + 1)];
};

export default getClosestNumbers;
