/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return 1;

  const numsMap = {};
  const left = {};
  const right = {};

  let i = 0;

  while (i < nums.length) {
    if (nums[i] in numsMap) {
      numsMap[nums[i]] += 1;
      right[nums[i]] = i;
    } else {
      left[nums[i]] = i;
      numsMap[nums[i]] = 1;
    }
    i++;
  }

  const degree = Math.max(...Object.values(numsMap));
  let ans = nums.length;

  for (const num in numsMap) {
    if (numsMap[num] === degree) {
      const lastIndex = right[num] ? right[num] : left[num];
      ans = Math.min(ans, lastIndex - left[num] + 1);
    }
  }

  return ans;
};
