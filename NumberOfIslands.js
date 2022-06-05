const checkNeighbourNodes = (grid, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  ) {
    return;
  }

  grid[i][j] = "0";
  checkNeighbourNodes(grid, i - 1, j);
  checkNeighbourNodes(grid, i + 1, j);
  checkNeighbourNodes(grid, i, j - 1);
  checkNeighbourNodes(grid, i, j + 1);
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid === null || grid.length === 0) return 0;

  let numOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        numOfIslands++;
        checkNeighbourNodes(grid, i, j);
      }
    }
  }

  return numOfIslands;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
