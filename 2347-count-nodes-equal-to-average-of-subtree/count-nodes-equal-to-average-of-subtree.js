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
var averageOfSubtree = function(root) {
    const SubtreeAvg = (node)=>{
        let queue=[];
        let sum=0,count=0;
        queue.push(node);
        while(queue.length>0){
            const curr = queue.shift();
            sum+=curr.val;
            count++;
            if(curr.left)queue.push(curr.left);
            if(curr.right)queue.push(curr.right);
        }
        return Math.floor(sum/count);
    };

    let count=0;
    let queue=[];
    queue.push(root);
    while(queue.length>0){
        const curr = queue.shift();
        let avg = SubtreeAvg(curr);
        if(avg===curr.val){
            count++;
        }
        if(curr.left)queue.push(curr.left);
        if(curr.right)queue.push(curr.right);
    }
    return count;
};