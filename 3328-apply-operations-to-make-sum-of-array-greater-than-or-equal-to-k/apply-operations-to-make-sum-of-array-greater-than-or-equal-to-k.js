/**
 * @param {number} k
 * @return {number}
 */
var minOperations = function(k) {
    if (k == 1) return 0;
    let res = Infinity;
    for(let i = 1; i <= k; i++) {
        let op = Math.ceil(k/i);
        res = Math.min(res,(op+i-2));
    }
    return res;
};