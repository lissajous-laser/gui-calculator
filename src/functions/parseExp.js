/**
 * Splits a string of a expression into an array of tokens,
 * 
 * @param {string} str expression to be parsed
 * @return {Array}
 */
export default function parseExp(str) {
  const parsedExp = [str[0]];
  const opRegex = /^[/*+-]$/;

  for (let i = 1; i < str.length; i++) {
    const parsedExpLastIdx = parsedExp.length - 1;
    const lastToken = parsedExp[parsedExpLastIdx];
    const secondLastToken = parsedExp[parsedExp.length - 2];
    const currentChar = str[i];

    if (lastToken === "-" 
      && (opRegex.test(secondLastToken) || secondLastToken === undefined))
    {
      // for negative signs for numbers
      parsedExp[parsedExpLastIdx] = lastToken + currentChar;
    } else if (opRegex.test(lastToken) || opRegex.test(currentChar)) {
      // operators
      parsedExp.push(currentChar);
    } else {
      // digits
      parsedExp[parsedExpLastIdx] = lastToken + currentChar;
    }
  }
  return parsedExp;
}