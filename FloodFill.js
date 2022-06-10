const fillNeighbourNodes = (image, i, j, currentColor, newColor) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= image.length ||
    j >= image[0].length ||
    image[i][j] !== currentColor
  ) {
    return;
  }

  image[i][j] = newColor;
  fillNeighbourNodes(image, i, j - 1, currentColor, newColor);
  fillNeighbourNodes(image, i, j + 1, currentColor, newColor);
  fillNeighbourNodes(image, i - 1, j, currentColor, newColor);
  fillNeighbourNodes(image, i + 1, j, currentColor, newColor);
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  if (newColor === image[sr][sc]) return image;
  fillNeighbourNodes(image, sr, sc, image[sr][sc], newColor);
  return image;
};
