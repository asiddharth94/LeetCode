/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let i = 0,
    j = 0,
    res = 0;

  const chars = {};

  while (j < s.length) {
    if (s[j] in chars) {
      chars[s[j]]++;
    } else {
      chars[s[j]] = 1;
    }

    while (chars[s[j]] > 1) {
      chars[s[i]]--;
      i++;
    }

    res = Math.max(res, j - i + 1);
    j++;
  }

  return res;
};

//     let n = s.length,
//         ans = 0;

//     let charMap = {};

//     for(let i=0, j=0; j<n; j++) {
//         if(s[j] in charMap) {
//             i = Math.max(charMap[s[j]], i);
//         }

//         ans = Math.max(ans, j-i+1);
//         charMap[s[j]] = j+1;
//     }

//     return ans;
// };
