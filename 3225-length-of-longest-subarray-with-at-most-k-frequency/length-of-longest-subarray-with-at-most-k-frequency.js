/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let longest=0;
    let start=0;
    let freq={0:0};
    for(let end=0;end<nums.length;end++){
        freq[nums[end]] = (freq[nums[end]] || 0)+1;
        while(freq[nums[end]]>k){
            freq[nums[start]]--; //shrink the window from left
            start++;
        }
        longest=Math.max(longest,end-start+1); //store max subarray size
    }
    return longest;
};