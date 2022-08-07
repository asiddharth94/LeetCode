// const findBound = (nums, target, isFirst) => {
//   let start = 0,
//     end = nums.length - 1;

//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);

//     if (nums[mid] === target) {
//       if (isFirst) {
//         if (mid === start || nums[mid - 1] !== target) {
//           return mid;
//         }

//         end = mid - 1;
//       } else {
//         if (mid === end || nums[mid + 1] !== target) {
//           return mid;
//         }

//         start = mid + 1;
//       }
//     } else if (nums[mid] > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return -1;
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // const firstOccurence = findBound(nums, target, true);

  // if (firstOccurence === -1) return [-1, -1];

  // const secondOccurence = findBound(nums, target, false);

  // return [firstOccurence, secondOccurence];

  // ALTERNATE

  let start = 0,
    end = nums.length - 1,
    foundAtIndexInSearch = -1,
    mid = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      foundAtIndexInSearch = mid;
      break;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (foundAtIndexInSearch === -1) return [-1, -1];

  let firstOccurence = mid,
    secondOccurence = mid;

  while (nums[firstOccurence - 1] === target) {
    firstOccurence -= 1;
  }

  while (nums[secondOccurence + 1] === target) {
    secondOccurence += 1;
  }

  return [firstOccurence, secondOccurence];
};

// two pointers --> start, end
// find the mid, see if it is equal to target
// if mid > target, update the end, else update the start
// once target is found, check on both right and left until a different value comes up
