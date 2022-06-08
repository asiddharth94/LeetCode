/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     const numsObj = {};
//     for(let i=0; i<nums.length; i++) {
//         if(nums[i] in numsObj) {
//             delete numsObj[nums[i]];
//         } else {
//             numsObj[nums[i]] = true;
//         }
//     }

//     return Object.keys(numsObj)[0];
// };

const singleNumber = (nums) => {
  let totalSum = 0,
    sumOfSet = 0;

  const numSet = new Set();

  for (const num of nums) {
    if (!numSet.has(num)) {
      numSet.add(num);
      sumOfSet += num;
    }
    totalSum += num;
  }

  return 2 * sumOfSet - totalSum;
};
