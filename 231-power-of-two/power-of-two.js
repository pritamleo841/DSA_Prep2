/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return ((n>0 && (n&(n-1)))===0);
};
/***
n=8=>1000
n-1=7=>0111
So, n & (n-1) = 1000 & 0111 = 0000 => 0
*/