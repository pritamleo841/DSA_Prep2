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
var sumNumbers = function(root) {
    let res=0;
    const dfs=(node,arr)=>{
        if(!node.left && !node.right){
            res+=Number(arr.join(''));
            return ;
        }
        if(node.left){
            arr.push(node.left.val);
            dfs(node.left,arr);
            arr.pop();
        }
        if(node.right){
            arr.push(node.right.val);
            dfs(node.right,arr);
            arr.pop();
        }
    }
    dfs(root,[root.val]);
    console.log(res);
    return res;
};