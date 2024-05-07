/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max_so_far = -Infinity;
    let n = arr.length;
    let ans = Array.from(n);
    ans[n-1]=-1;
    for(let i=n-1;i>=0;i--){
        max_so_far= Math.max(max_so_far,arr[i]);
        ans[i-1] = max_so_far;
    }
    return ans;
};