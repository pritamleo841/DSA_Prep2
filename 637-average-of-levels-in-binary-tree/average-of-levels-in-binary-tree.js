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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let result=[];
    const bfs=(node)=>{
        let queue=[];
        queue.push(node);
        while(queue.length){
            let n=queue.length;
            let sum=0;
            for(let i=0;i<n;i++){
                let curr=queue.shift();
                sum+=curr.val;
                if(curr.left)queue.push(curr.left);
                if(curr.right)queue.push(curr.right);
            }
            result.push(sum/n);
        }
    };
    bfs(root);
    return result;
};