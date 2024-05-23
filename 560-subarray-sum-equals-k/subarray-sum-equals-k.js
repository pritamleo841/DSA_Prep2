/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let prevSum = new Map();
    //HashMap to store number of subarrays starting
    //from index zero having particular value of k.
    let count = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];  //sum of sub arrays

        if (sum == k)
            count++;

        //sum exceeds given k by sum-k.Find number of subarrays having this sum 
        //and exclude those subarray from sum by increasing count by same amount.
        if (prevSum.has(sum - k))
            count += prevSum.get(sum - k);

        // Add sum value to count of different values of k.
        let countSum = prevSum.get(sum);
        if (countSum == null)
            prevSum.set(sum, 1);
        else
            prevSum.set(sum, countSum + 1);
    }
    return count;
};