/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count = Array(3).fill(0);
    for(let n of nums){
        if(n===0)count[0]++;
        else if(n===1)count[1]++;
        else if(n===2)count[2]++;
    }
    
    let index=0;
    while(index<nums.length){
        while(count[0]--)nums[index++]=0;
        while(count[1]--)nums[index++]=1;
        while(count[2]--)nums[index++]=2;
    }
};