/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
    // const ret = [];
    // for(let x=1;x<=1000;x++){
    //     for(let y=1;y<=1000;y++){
    //         if(customfunction.f(x,y)===z){
    //             ret.push([x,y]);
    //             break;
    //         }
    //     }
    // }
    // return ret;
    //BINARY SEARCH
    // const ret = [];
    // let max = 1000;
    // for (let x = 1; x <= 1000; ++x) {
    //     if (max === 1) break;
    //     for (let left = 1, right = max; left < right;) {
    //         const mid = Math.floor((right + left) / 2);
    //         const val = customfunction.f(x, mid);
    //         if (val === z) {
    //             ret.push([x, mid]);
    //             max = mid;
    //             break;
    //         }
    //         val < z ? (left = mid + 1) : (right = mid, max = mid);
    //     }
    // }
    // return ret;
    //TWO-POINTERS
    const ret = [];
    for (let x = 1, y = 1000; x <= 1000 && y >= 1;) {
        const val = customfunction.f(x, y);
        val === z && ret.push([x, y]);
        val < z ? ++x : --y;
    }
    return ret;
};