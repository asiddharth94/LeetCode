/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    resultStart = -1,
    resultEnd = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      resultStart = mid;
      resultEnd = mid;
      let curr = mid;

      while (nums[--curr] === target) {
        resultStart--;
      }
      while (nums[++mid] === target) {
        resultEnd++;
      }
      return [resultStart, resultEnd];
    }

    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return [resultStart, resultEnd];
};

// two pointers --> start, end
// find the mid, see if it is equal to target
// if mid > target, update the end, else update the start
// once target is found, check on both right and left until a different value comes up
