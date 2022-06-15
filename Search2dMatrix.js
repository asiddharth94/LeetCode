/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;

  const numOfRows = matrix.length;
  const numOfCols = matrix[0].length;

  let left = 0,
    right = numOfRows * numOfCols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midElem =
      matrix[Math.floor(mid / numOfCols)][Math.floor(mid % numOfCols)];

    if (midElem === target) return true;

    if (midElem > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
