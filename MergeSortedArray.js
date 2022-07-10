/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (m !== 0 && n === 0) return nums1;

  const nums1Copy = nums1.slice(0, m);

  let n1 = 0,
    n2 = 0,
    n1C = 0;

  while (n1 < nums1.length) {
    if ((nums1Copy[n1C] <= nums2[n2] && n1C < m) || n2 >= n) {
      nums1[n1++] = nums1Copy[n1C++];
    } else {
      nums1[n1++] = nums2[n2++];
    }
  }
};
