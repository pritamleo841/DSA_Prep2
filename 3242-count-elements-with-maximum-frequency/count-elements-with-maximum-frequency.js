/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map();
    let max_count = 0;
    let totalFreq = 0;
    for(let n of nums){
        map.set(n,(map.get(n) || 0)+1);
    }
    console.log(map);
    for(let n of nums){
        max_count=Math.max(map.get(n),max_count);
    }
    console.log(max_count);
    for(let n of nums){
        if(map.get(n)===max_count){
            totalFreq++;
        }
    }
    return totalFreq;
};