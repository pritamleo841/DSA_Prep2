/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    /**
    Facts,
    1.The root is at the end of postorder
    2.inorder is of the form [...leftinorder, root, ...rightinorder]
    3.postorder is of the form [...leftpostorder, ...rightpostorder, root]
    4.leftinorder.length === leftpostorder.length
    5.rightinorder.length === rightpostorder.length
    */
    if(inorder.length==0 || postorder.length==0)return null;
    let root = postorder[postorder.length-1];
    let pivot = inorder.indexOf(root);
    return{
        val:root,
        left:buildTree(inorder.slice(0,pivot),postorder.slice(0,pivot)),
        right:buildTree(inorder.slice(pivot+1),postorder.slice(pivot,-1))
    };
    //NOTE - SOLUTION CAN BE IMPROVED USING HASHMAP
};