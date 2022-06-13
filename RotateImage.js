/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;

  //     transpose
  //     [[1,2,3], [4,5,6], [7,8,9]] ----> [[1,4,7], [2,5,8], [3,6,9]]
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //     reverse
  //     [[1,4,7], [2,5,8], [3,6,9]] ----> [[7,4,1], [8,5,2], [9,6,3]]
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < Math.floor(len / 2); j++) {
      //             swapping in one line
      [matrix[i][j], [matrix[i][len - j - 1]]] = [
        matrix[i][len - j - 1],
        [matrix[i][j]],
      ];
    }
  }

  return matrix;
};
