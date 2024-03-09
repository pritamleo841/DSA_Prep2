/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let min=Infinity;
    let set = new Set();
    for(let n of nums1)set.add(n);
    for(let n of nums2){
        if(set.has(n)){
            min=Math.min(min,n);
        }
    }
    return min === Infinity?-1:min;
};