/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const combinedLength = nums1.length + nums2.length;
  let i = 0,
    j = 0;

  const mergedArray = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      mergedArray.push(nums1[i++]);
    } else {
      mergedArray.push(nums2[j++]);
    }
  }

  while (i < nums1.length) {
    mergedArray.push(nums1[i++]);
  }

  while (j < nums2.length) {
    mergedArray.push(nums2[j++]);
  }

  let medIndex, median;
  if (combinedLength % 2 !== 0) {
    midIndex = Math.floor(combinedLength / 2);
    median = mergedArray[midIndex];
  } else {
    midIndex = combinedLength / 2;
    median = (mergedArray[midIndex] + mergedArray[midIndex - 1]) / 2;
  }

  return median;
};
