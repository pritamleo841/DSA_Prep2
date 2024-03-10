/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = new Set();
    let set = new Set();
    for(let n of nums1)set.add(n);
    for(let n of nums2){
        if(set.has(n))res.add(n);
    }
    // let set1 = new Set();
    // for(let n of res){
    //     set1.add(n);
    // }
    // res.length=0;
    // for(let val of set1)res.push(val)
    return Array.from(res);
};