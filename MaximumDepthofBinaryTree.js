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
var maxDepth = function (root, depth = 0) {
  if (root === null) return depth;
  depth++;
  return Math.max(
    maxDepth(root.left, depth),
    maxDepth(root.right, depth),
    depth
  );
};
