/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let maxArea = 0;

  let i = 0,
    j = height.length - 1;

  while (i < j) {
    if (height[i] <= height[j]) {
      maxArea = Math.max(height[i] * (j - i), maxArea);
      i++;
    } else {
      maxArea = Math.max(height[j] * (j - i), maxArea);
      j--;
    }
  }

  return maxArea;
};
