/**
 * Performs infix addition and subtraction on an array of
 * tokens, and returns the computed result.
 *
 * @param {Array}
 * @return {number}
 */
export default function addAndSub(tokens) {
  if (tokens.length === 1) {
    return tokens[0];
  } else {
    switch (tokens[1]) {
      case '+':
        const sum = Number(tokens[0]) + Number(tokens[2]);
        return addAndSub([sum, ...tokens.slice(3)]);
      case '-':
        const diff = tokens[0] - tokens[2];
        return addAndSub([diff, ...tokens.slice(3)]);
      default:
        throw new Error('Invalid operator found');
    }
  }
}