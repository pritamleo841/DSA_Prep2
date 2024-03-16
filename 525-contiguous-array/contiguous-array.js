/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    /**
    To find the maximum length, we need a dict to store the value of count (as the key) 
    and its associated index (as the value). 
    We only need to save a count value and its index at the first time, 
    when the same count values appear again, 
    we use the new index subtracting the old index to calculate the length of a subarray.
    A variable max_length is used to to keep track of the current maximum length.
    */
    let count=0;
    let maxLen=0;
    let map=new Map();
    map.set(0,-1);
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0)count--;
        if(nums[i]===1)count++;
        //if(count===0)maxLen=i+1; //contigous array of 0's and 1's
        //to avoid this line, we can set map.set(0,-1) at top
        if(map.has(count)){
            maxLen=Math.max(maxLen,i-map.get(count));
        }else{
            map.set(count,i)
        }
    }
    return maxLen;
};