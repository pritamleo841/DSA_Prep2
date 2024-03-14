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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    /**
    If the current (sub)tree contains both p and q, then the function result is their LCA.
    If only one of them is in that subtree, then the result is that one of them.
    If neither are in that subtree, the result is null/None/nil.
    */
    if(!root || root===p || root===q)return root;
    const left = lowestCommonAncestor(root.left,p,q);
    const right = lowestCommonAncestor(root.right,p,q);
    if(!left)return right; //p and q are in the right subtree
    if(!right)return left; // p and q are in the left subtree
    return root; // p is in one side and q is in the other
};