/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length) return true;

  const stack = [];

  const validParens = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i);
    if (currentChar in validParens) {
      stack.push(currentChar);
    } else {
      const lastChar = stack.pop();
      if (validParens[lastChar] !== currentChar) return false;
    }
  }

  return stack.length ? false : true;
};
