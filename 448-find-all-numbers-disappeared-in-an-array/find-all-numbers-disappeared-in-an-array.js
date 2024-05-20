/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    let len = nums.length;
    let set = new Set();
    nums.map(n=>set.add(n));
    let res = [];
    for(let i=1;i<=len;i++){
        if(!set.has(i))res.push(i);
    } 
    return res;
};