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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
    dfs(root);
    
    function dfs(root) {
        if (root !== null) {
            result.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }
    }
    return result;
};