const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[nums[i] - 1]) {
      i++;
    } else {
      swap(nums, i, nums[i] - 1);
    }
  }
  const numsArray = [];
  i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      numsArray.push(i + 1);
    }
    i++;
  }

  return numsArray;
};
