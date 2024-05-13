/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //Moore's voting algorithm
    let count=0;
    let candidate=nums[0];
    for(let i=0;i<nums.length;i++){
        if(count===0){
            candidate=nums[i];
            count++;
        }
        else if(candidate===nums[i])count++;
        else if(candidate!==nums[i])count--;
    }
    return candidate;
};