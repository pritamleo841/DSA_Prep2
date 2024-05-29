/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let [open,close,swaps] = [0,0,0];

    for(let c of s){
        (c === ']')?close++:open++;
        if(close>open){
            swaps++;
            //we swap a close bracket with one open bracket from the end of s
            close--;
            open++;
        }
    }
    return swaps;
};