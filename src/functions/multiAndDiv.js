/**
 * Performs infix multiplication and division on an array of
 * tokens, and returns a new array of tokens.
 *
 * @param {Array}
 * @return {Array}
 */
export default function multAndDiv(tokens) {

  for (let i = 0; i < tokens.length; i++) {

    switch (tokens[i + 1]) {
      case '*':
        const product = Number(tokens[i]) * Number(tokens[i + 2]);
        return multAndDiv(
          tokens.slice(0, i)
          .concat(product)
          .concat(tokens.slice(i + 3))
        );
      case '/':
        const dividend = Number(tokens[i]) / Number(tokens[i + 2]);
        return multAndDiv(
          tokens.slice(0, i)
          .concat(dividend)
          .concat(tokens.slice(i + 3))
        );
      default:
        continue;
    }
  }
  // if no multiplication or division operations performed
  return tokens;
}