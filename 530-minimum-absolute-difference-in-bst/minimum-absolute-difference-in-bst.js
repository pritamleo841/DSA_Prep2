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
var getMinimumDifference = function(root) {
    let prev=null, min = Infinity;
    const dfs = (node)=>{ //inorder traversal of bst results sorted array
        if(node===null)return min;
        dfs(node.left);
        if(prev!=null){
            min=Math.min(min,node.val-prev);
        }
        prev=node.val;
        dfs(node.right);
        return min;
    };
    return dfs(root);
};