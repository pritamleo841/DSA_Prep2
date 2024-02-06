/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let id=m+n-1;
    let i=m-1,j=n-1;
    //we have to start from reverse side of the array
    while(i>=0 && j>=0){
        if(nums1[i]<nums2[j]){
            nums1[id--]=nums2[j--];
        }
        else if(nums1[i]>nums2[j]){
            nums1[id--]=nums1[i--];
        }
        else{
            nums1[id--]=nums2[j--];
            nums1[id--]=nums1[i--];
        }
    }
    while(i>=0){
        nums1[id--]=nums1[i--];
    }
    while(j>=0){
        nums1[id--]=nums2[j--];
    }
    console.log(nums1);
};