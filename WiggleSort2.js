/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let val = [...nums];
  val.sort((a, b) => a - b);
  let idx = val.length - 1;
  for (let i = 1; i < nums.length; i += 2) nums[i] = val[idx--];
  for (let i = 0; i < nums.length; i += 2) nums[i] = val[idx--];
};
