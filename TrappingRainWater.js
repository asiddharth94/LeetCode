/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;

  let leftMax = [height[0]];

  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  let rightMax = [];
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  // for(let i=1; i<height.length; i++) {
  // let left_max = 0,
  // right_max = 0;
  // for(let j=i; j>=0; j--) {
  //     left_max = Math.max(left_max, height[j]);
  // }
  // for(let k=i; k<height.length; k++) {
  //     right_max = Math.max(right_max, height[k]);
  // }

  //     ans += Math.min(left_max, right_max) - height[i];
  // }

  return ans;
};
