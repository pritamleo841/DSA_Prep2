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
var countNodes = function(root) {
    // let count=0;
    // const dfs=(node)=>{
    //     if(!node)return;
    //     count++
    //     if(node.left)dfs(node.left);
    //     if(node.right)dfs(node.right);
    // }
    // dfs(root);
    // return count;
    if (root === null) return 0;
    let left = countNodes(root.left);
    let right = countNodes(root.right);
    return 1 + left + right;
};