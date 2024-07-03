/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_so_far=nums[0],max_curr_sum=nums[0];
    for(let i=1;i<nums.length;i++){
        max_curr_sum = Math.max(nums[i],max_curr_sum+nums[i]);
        max_so_far = Math.max(max_curr_sum,max_so_far);
    }
    return max_so_far;
};