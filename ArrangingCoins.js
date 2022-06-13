/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 0,
    right = n,
    mid,
    curr;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    curr = (mid * (mid + 1)) / 2;

    if (curr === n) return mid;

    if (n < curr) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
