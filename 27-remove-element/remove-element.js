/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //only way to pass test case - swap nontarget elements with index and return index
    let index=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[index]=nums[i];
            index++;
        }
    }
    return index;
};