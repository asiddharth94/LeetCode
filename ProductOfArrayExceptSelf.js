/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (!nums.length) return [];

  const left = [1],
    right = [];

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  const outputArray = [];

  for (let i = 0; i < nums.length; i++) {
    outputArray[i] = left[i] * right[i];
  }

  return outputArray;
};
