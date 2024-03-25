/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const duplicates = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            duplicates.push(index + 1);
        }
        nums[index] = nums[index] * -1;
    }
    return duplicates;
};