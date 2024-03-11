/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root)return root;
    const bfs = (root)=>{
        let queue=[root];
        while(queue.length>0){
            let node = queue.shift();
            if(node.left && node.right){
                node.left.next = node.right;
                //use next ptr to assign values
                if(node.next){
                    node.right.next=node.next.left;
                }
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    };
    bfs(root);
    return root;
};