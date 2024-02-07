/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /**
    Just go through the numbers and 
    include those in the result that haven't been included twice already.
    */
    let i=0;
    for(let n of nums){
        if(i<2 || n>nums[i-2]){
            nums[i++]=n;
        }
    }
    return i;
};