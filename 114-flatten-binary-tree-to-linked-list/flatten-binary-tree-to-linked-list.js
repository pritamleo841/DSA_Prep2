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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    //Using two stack
    let stack=[root];
    let waiting=[];
    while(stack.length){
        const node=stack.pop();
        if(!node)continue;
        if(node.left){
            if(node.right)waiting.push(node.right);
            node.right=node.left;
            node.left=null;
        }
        if(node.right){
            stack.push(node.right);
            continue;
        }
        if(waiting.length){
            node.right=waiting.pop();
            stack.push(node.right);
        }
    }
};