/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const strMap = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in strMap) {
      strMap[s[i]] += 1;
    } else {
      strMap[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (strMap[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
