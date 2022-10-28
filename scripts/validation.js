// Various validation methods

export const hasManySymbols = (str, symbol) => {
  const firstIndex = str.indexOf(symbol); // find the first occurrence of the symbol
  if (firstIndex == -1) return false; // if there is no first occurrence there are not many symbols

  return str.indexOf(symbol, firstIndex + 1) != -1; // whether or not there is a second occurrence
};

export const validate = (str) => {
  hasManySymbols(str, ".") ? "invalid input" : "valid input";
};
