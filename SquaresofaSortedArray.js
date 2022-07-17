/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1,
    lastIndex = nums.length - 1;

  const squaredArray = [];

  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      squaredArray[lastIndex--] = nums[left] * nums[left];
      left++;
    } else {
      squaredArray[lastIndex--] = nums[right] * nums[right];
      right--;
    }
  }

  return squaredArray;
};
