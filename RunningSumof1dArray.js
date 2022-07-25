/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (nums.length === 0) return [];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  return nums;

  //   Using Extra Space
  //   let currRunningSum = nums[0];
  //   const outputArr = [currRunningSum];
  //   for (let i = 1; i < nums.length; i++) {
  //     outputArr[i] = nums[i] + currRunningSum;
  //     currRunningSum = outputArr[i];
  //   }
  //   return outputArr;
};
