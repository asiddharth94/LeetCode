const checkNeighbourNodes = (grid, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === 0
  )
    return 0;

  grid[i][j] = 0;

  return (
    1 +
    checkNeighbourNodes(grid, i, j - 1) +
    checkNeighbourNodes(grid, i, j + 1) +
    checkNeighbourNodes(grid, i - 1, j) +
    checkNeighbourNodes(grid, i + 1, j)
  );
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let numOfRows = grid.length,
    numOfCols = grid[0].length,
    areaOfIsland = 0,
    maxAreaOfIsland = 0;

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfCols; j++) {
      if (grid[i][j] === 1) {
        areaOfIsland = checkNeighbourNodes(grid, i, j, 0);
        maxAreaOfIsland = Math.max(maxAreaOfIsland, areaOfIsland);
      }
    }
  }

  return maxAreaOfIsland;
};
