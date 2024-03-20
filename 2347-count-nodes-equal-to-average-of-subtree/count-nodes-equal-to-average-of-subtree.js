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
  
    //using level order - O(n2)
    // const SubtreeAvg = (node)=>{
    //     let queue=[];
    //     let sum=0,count=0;
    //     queue.push(node);
    //     while(queue.length>0){
    //         const curr = queue.shift();
    //         sum+=curr.val;
    //         count++;
    //         if(curr.left)queue.push(curr.left);
    //         if(curr.right)queue.push(curr.right);
    //     }
    //     return Math.floor(sum/count);
    // };

    // let count=0;
    // let queue=[];
    // queue.push(root);
    // while(queue.length>0){
    //     const curr = queue.shift();
    //     let avg = SubtreeAvg(curr);
    //     if(avg===curr.val){
    //         count++;
    //     }
    //     if(curr.left)queue.push(curr.left);
    //     if(curr.right)queue.push(curr.right);
    // }
    // return count;

    //we can optimize the solution using postorder traversal
    let result = 0;
    const traverse = (node) => { //postorder traversal
        if (!node) return [0, 0];
        const [leftSum, leftCount] = traverse(node.left);
        const [rightSum, rightCount] = traverse(node.right);

        const currSum = node.val + leftSum + rightSum;
        const currCount = 1 + leftCount + rightCount;
        
        if (Math.floor(currSum/currCount) === node.val)result++;
        
        return [currSum, currCount];
    };
    
    traverse(root);
    return result;
};