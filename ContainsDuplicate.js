/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numsMap = {};

  let i = 0;
  while (i < nums.length) {
    if (nums[i] in numsMap) {
      return true;
    } else {
      numsMap[nums[i]] = i;
    }
    i++;
  }

  return false;
};
