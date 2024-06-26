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
var findBottomLeftValue = function(root) {
    //If we traverse level order, last remaining value will be BottomLeftValue
    let curr=root;
    let queue=[];
    queue.push(root);
    while(queue.length!=0){
        curr = queue.shift();
        if(curr.right!=null)queue.push(curr.right);
        if(curr.left!=null)queue.push(curr.left);
    }
    return curr.val;
};