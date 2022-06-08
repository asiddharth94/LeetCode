const binarySearch = (arr, target, left, right) => {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);

  if (target === arr[mid]) return mid;

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};
