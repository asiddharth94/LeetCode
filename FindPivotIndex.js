/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let i = 0,
    leftSum = 0,
    totalSum = 0;

  for (const num of nums) {
    totalSum += num;
  }

  while (i < nums.length) {
    if (leftSum === totalSum - leftSum - nums[i]) return i;
    leftSum += nums[i];
    i++;
  }

  return -1;

  // <------ Using two array to store left and right sum for each index ------>
  //   const leftSumArr = [0];
  //   const rightSumArr = [];
  //   for (let i = 1; i < nums.length; i++) {
  //     leftSumArr[i] = nums[i - 1] + leftSumArr[i - 1];
  //   }
  //   rightSumArr[nums.length - 1] = 0;
  //   for (let i = nums.length - 2; i >= 0; i--) {
  //     rightSumArr[i] = nums[i + 1] + rightSumArr[i + 1];
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     if (leftSumArr[i] === rightSumArr[i]) return i;
  //   }
  //   return -1;
};
