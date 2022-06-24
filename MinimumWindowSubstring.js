/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) {
    return "";
  }

  const strMap = {};

  for (let i = 0; i < t.length; i++) {
    const currentChar = t.charAt(i);
    if (currentChar in strMap) {
      strMap[currentChar] = strMap[currentChar] + 1;
    } else {
      strMap[currentChar] = 1;
    }
  }

  let left = 0,
    right = 0,
    uniqueCharsCount = Object.keys(strMap).length,
    formed = 0,
    currWindow = {},
    answer = [-1, 0, 0];

  while (right < s.length) {
    let currChar = s.charAt(right);
    if (currChar in currWindow) {
      currWindow[currChar] += 1;
    } else {
      currWindow[currChar] = 1;
    }

    if (currChar in strMap && strMap[currChar] === currWindow[currChar]) {
      formed++;
    }

    while (left <= right && formed === uniqueCharsCount) {
      currChar = s.charAt(left);

      if (answer[0] === -1 || right - left + 1 < answer[0]) {
        answer[0] = right - left + 1;
        answer[1] = left;
        answer[2] = right;
      }

      left++;

      currWindow[currChar] -= 1;

      if (currChar in strMap && currWindow[currChar] < strMap[currChar]) {
        formed--;
      }
    }
    right++;
  }

  return answer[0] === -1 ? "" : s.slice(answer[1], answer[2] + 1);
};
