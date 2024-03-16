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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    /**
    Its a standard BFS with but the difference is we are keeping track of the depth at each level 
    and that's determines if were adding to the front of the level array or 
    the back of the level array.
    */
    if(!root)return [];
    let output=[];
    let depth=0;
    const bfs_zigzag=(node)=>{
        let queue=[node];
        while(queue.length){
            const size=queue.length;
            let level=[];
            for(let i=0;i<size;i++){
                let curr=queue.shift();
                if(depth%2==0)level.push(curr.val);
                else level.unshift(curr.val);

                if(curr.left)queue.push(curr.left);
                if(curr.right)queue.push(curr.right);
            }
            output.push(level);
            depth++;
        }
    };
    bfs_zigzag(root);
    return output;
};