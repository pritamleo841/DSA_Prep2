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
var isEvenOddTree = function(root) {
    if(!root)return true;
    let queue=[];
    queue.push(root);
    let level=0;
    while(queue.length>0){
        let n = queue.length;
        let prevVal = (level%2===0)?Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
        for(let i=0;i<n;i++){
            let curr = queue.shift();
            if(
                (level%2==0 && (curr.val%2==0 || curr.val<=prevVal)) ||
                (level%2==1 && (curr.val%2==1 || curr.val>=prevVal))
            ){
                return false;
            }
            prevVal = curr.val;
            if(curr.left!=null)queue.push(curr.left);
            if(curr.right!=null)queue.push(curr.right);
        }
        level++;
    }
    return true;
};