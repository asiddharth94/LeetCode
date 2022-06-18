const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0;

  while (i < nums.length) {
    if (i === nums[i] || nums[i] === nums.length) {
      i++;
    } else {
      swap(nums, i, nums[i]);
    }
  }

  i = 0;
  while (i < nums.length + 1) {
    if (i !== nums[[i]]) {
      return i;
    }
    i++;
  }

  return nums.length;
};
