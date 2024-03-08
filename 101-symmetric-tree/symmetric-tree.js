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
 * @return {boolean}
 */
var isSymmetric = function(root) {
   if(root==null)return true;
   return isSame(root.left,root.right);
};
var isSame = function(lroot,rroot){
    if((!lroot && rroot) || (lroot && !rroot) || (lroot && rroot && lroot.val!=rroot.val))return false;
    if(lroot && rroot){
        return isSame(lroot.left,rroot.right) && isSame(lroot.right,rroot.left);
    }
    return true;
};
/**
const isSym = (node1, node2) => {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    return node1.val === node2.val && isSym(node1.left, node2.right) && isSym(node1.right, node2.left);
};

var isSymmetric = function(root) {
    return isSym(root.left, root.right);
};

 */