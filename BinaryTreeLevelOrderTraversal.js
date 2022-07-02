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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  let stack = [[root.val]];
  let queue = [[root]];

  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.length === 0) break;
    let lev = [];
    let nodeLev = [];
    curr.forEach((node) => {
      if (node.left) {
        nodeLev.push(node.left);
        lev.push(node.left.val);
      }
      if (node.right) {
        nodeLev.push(node.right);
        lev.push(node.right.val);
      }
    });
    if (lev.length > 0) {
      stack.push(lev);
    }
    queue.push(nodeLev);
  }

  return stack;
};
