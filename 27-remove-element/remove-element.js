/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //only need to store non target elements into new indexed positions
    let index=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[index++]=nums[i];
        }
    }
    return index;
};