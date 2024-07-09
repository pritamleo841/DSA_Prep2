/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // let set = new Set();
    // for(let n of nums){
    //     if(set.has(n))return n;
    //     set.add(n);
    // }

    //Without using SET - Slow-Fast pointer technique
    let fast = 0;
    let slow = 0;
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        if (fast === slow) {
            break;
        }
    }
    slow = 0;
    while (nums[fast] !== nums[slow]) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return nums[fast];
};