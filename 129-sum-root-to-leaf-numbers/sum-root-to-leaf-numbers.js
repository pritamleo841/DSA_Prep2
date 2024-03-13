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
    // let res=0;
    // const dfs=(node,arr)=>{
    //     if(!node.left && !node.right){
    //         res+=Number(arr.join(''));
    //         return ;
    //     }
    //     if(node.left){
    //         arr.push(node.left.val);
    //         dfs(node.left,arr);
    //         arr.pop();
    //     }
    //     if(node.right){
    //         arr.push(node.right.val);
    //         dfs(node.right,arr);
    //         arr.pop();
    //     }
    // }
    // dfs(root,[root.val]);
    // return res;

    let ret = 0;
    const dfs = (node, val) => {
        val = (val * 10) + node.val;
        if (!node.left && !node.right) {
            ret += val;
            return;
        }
        if(node.left)dfs(node.left, val);
        if(node.right)dfs(node.right, val);
    }
    dfs(root, 0);
    return ret;
};