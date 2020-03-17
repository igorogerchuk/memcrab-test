const getClosestNumbers = (array, element, numbersQty) => {
  let inlineArray = array.reduce((acc, line) => [...acc, ...line.cells], []);

  if (numbersQty < inlineArray.length - 1) {
    inlineArray.sort(
      (a, b) =>
        Math.abs(a.amount - element.amount) -
        Math.abs(b.amount - element.amount)
    );
  }

  const closestNumbers = inlineArray.slice(0, numbersQty + 1);

  const closestNumbersIds = closestNumbers.reduce(
    (acc, element) => ({ ...acc, [element.id]: true }),
    {}
  );

  return { [element.id]: true, ...closestNumbersIds };
};

export default getClosestNumbers;
