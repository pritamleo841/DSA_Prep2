/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const swap = (arr,i,j)=> {
        [arr[i],arr[j]] = [arr[j],arr[i]]
    };
    const n = nums.length;
    //place each positive integer i to (i-1)th index of array
    //e.g., place 1 to nums[0]
    for(let i=0;i<n;i++){
        while(nums[i]>0 && nums[i]<=n && nums[i]!==nums[nums[i]-1]){
            swap(nums,i,nums[i]-1);
        }
    }
    //find first positive integer
    for(let i=0;i<n;i++){
        if(nums[i]!==i+1)return i+1;
    }
    //if [1...n] is present,return n+1
    return n+1;
};