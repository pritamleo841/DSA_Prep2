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
var deepestLeavesSum = function(root) {
    const treeDepth = (node)=>{
        if(!node)return null;
        return 1 + Math.max(treeDepth(node.left),treeDepth(node.right));
    };
    const maxDepth = treeDepth(root);
    // console.log(maxDepth);

    let queue=[[root,1]];
    let sum=0;
    while(queue.length){
        const [curr,depth ]= queue.shift();
        if(!curr.left && !curr.right && maxDepth===depth){
            sum+=curr.val;
        }
        if(curr.left)queue.push([curr.left,depth+1]);
        if(curr.right)queue.push([curr.right,depth+1]);
    }
    return sum;
};