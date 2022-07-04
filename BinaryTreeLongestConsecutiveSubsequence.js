/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function (root) {
  let longestConsecutive = 0;

  const getLongestConsecHelper = (node, parent, length) => {
    if (node === null) return;
    length = parent !== null && node.val === parent.val + 1 ? length + 1 : 1;
    longestConsecutive = Math.max(longestConsecutive, length);

    getLongestConsecHelper(node.left, node, length);
    getLongestConsecHelper(node.right, node, length);
  };

  getLongestConsecHelper(root, null, 0);
  return longestConsecutive;
};
