export const evaluate = (stored, current, operator) => {
  let result;

  switch (operator) {
    case "+":
      result = Number(stored) + Number(current);
      break;
    case "-":
      result = Number(stored) - Number(current);
      break;
    case "/":
      result = Number(stored) / Number(current);
      break;
    case "%":
      result = Number(stored) % Number(current);
      break;
    case "*":
      result = Number(stored) * Number(current);
      break;
    default:
      result = current;
  }
  return result.length > 10 ? result.toPrecision(5) : result;
};
