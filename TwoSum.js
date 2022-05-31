/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// traverse through array
// i --> check if target-array[i] is available in map
// if not , save array[i]: i in map
// else, return i and map[diff]

var twoSum = function (nums, target) {
  const diffMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diffMap[diff] || diffMap[diff] === 0) {
      return [i, diffMap[diff]];
    }
    diffMap[nums[i]] = i;
  }
  return null;
};
