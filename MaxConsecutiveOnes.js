/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let start = 0,
    end = 0,
    maxConsOnes = 0,
    index = 0;

  while (index < nums.length) {
    if (nums[index] === 0) {
      start = index + 1;
      end = index + 1;
    } else {
      end = index;
      maxConsOnes = Math.max(maxConsOnes, end - start + 1);
    }
    index++;
  }

  return maxConsOnes;
};
