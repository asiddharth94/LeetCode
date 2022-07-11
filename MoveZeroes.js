const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let curr = 0,
    nonZeroElementFound = 0;

  while (curr < nums.length) {
    // We maintain the discovery of non-zero numbers, while traversing
    // Once we find a non-zero number, we see from the count whether it is at its
    // correct index by comparing with current index. (e.g. if its the
    // first non-zero found, it should be at 0 index)
    // If not , call swap()
    if (nums[curr] !== 0) {
      nonZeroElementFound++;
      if (nonZeroElementFound - 1 !== curr) {
        swap(nums, curr, nonZeroElementFound - 1);
      }
    }

    curr++;
  }
};
