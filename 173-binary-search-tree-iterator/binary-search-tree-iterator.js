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
 */
var BSTIterator = function(root) {
    // if(!root){
    //     this.data=[];
    //     return;
    // }
    // //In Order DFS traversal [Sorted in low to high value]
    // let visited=[];
    // function traverse(node){
    //     if(node.left)traverse(node.left);
    //     visited.push(node.val);
    //     if(node.right)traverse(node.right);
    // }
    // traverse(root);
    // //Reverse traversed result to have sorting from high to low value
    // this.data=visited.reverse();
    this.root=root;
    this.stack=[];
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    // return this.data.pop(); //O(1)
    while(this.root){
        this.stack.push(this.root);
        this.root=this.root.left;
    }
    const res=this.stack.pop();
    this.root=res.right;
    return res.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    // return this.data.length>0;
    return this.root || this.stack.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */