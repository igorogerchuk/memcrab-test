const getClosestNumbers = (array, id, numbersQty) => {
  let origin;
  const inlineArray = [];
  array.forEach(line =>
    line.forEach(element => {
      if (element.id === id) {
        origin = element;
      } else {
        inlineArray.push(element);
      }
    })
  );
  inlineArray.sort(
    (a, b) =>
      Math.abs(a.amount - origin.amount) - Math.abs(b.amount - origin.amount)
  );
  return [origin, ...inlineArray.slice(0, numbersQty)];
};

export default getClosestNumbers;
