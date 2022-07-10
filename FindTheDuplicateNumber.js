const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === nums[nums[i] - 1]) {
      i++;
    } else {
      swap(nums, i, nums[i] - 1);
    }
  }

  i = 0;
  while (i < nums.length) {
    if (i !== nums[i] - 1) return nums[i];
    i++;
  }
};
