/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  const nodes = [];

  const traverse = (node) => {
    if (node === null) return;

    traverse(node.left);
    nodes.push(node);
    traverse(node.right);
  };

  traverse(root);

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].val === p.val) {
      if (i === nodes.length - 1) {
        return null;
      }
      return nodes[i + 1];
    }
  }
};
