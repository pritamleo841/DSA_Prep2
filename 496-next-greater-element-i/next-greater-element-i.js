/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // let res = [];
    // for(let i=0;i<nums1.length;i++){
    //     let max_item = -1;
    //     for(let j=i+1;j<nums2.length;j++){
    //         if(nums2[j]>nums1[i]){
    //             max_item=nums2[j];
    //         }
    //     }
    //     res.push(max_item);
    // }
    // return res;
     
    let stack =[];
    let map = {};
    
    nums2.forEach(n => {
        while (stack.length > 0 && stack[stack.length-1] < n){
            map[stack.pop()] = n;
        }
        stack.push(n);
    });
    
    return nums1.map(n => map[n] || -1); 
};