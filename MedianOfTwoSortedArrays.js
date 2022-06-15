/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  //     we'll binary search the smaller array
  if (nums2.length < nums1.length) return findMedianSortedArrays(nums2, nums1);

  const lengthOne = nums1.length;
  const lengthTwo = nums2.length;

  let low = 0,
    high = lengthOne;

  while (low <= high) {
    const cut1 = Math.floor((low + high) / 2);
    const cut2 = Math.floor((lengthOne + lengthTwo + 1) / 2) - cut1;

    const left1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[cut1 - 1];
    const left2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[cut2 - 1];

    const right1 = cut1 === lengthOne ? Number.MAX_SAFE_INTEGER : nums1[cut1];
    const right2 = cut2 === lengthTwo ? Number.MAX_SAFE_INTEGER : nums2[cut2];

    if (left1 <= right2 && left2 <= right1) {
      if ((lengthOne + lengthTwo) % 2 === 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      } else {
        return Math.max(left1, left2);
      }
    } else if (left1 > right2) {
      high = cut1 - 1;
    } else {
      low = cut1 + 1;
    }
  }
  return 0;
};
