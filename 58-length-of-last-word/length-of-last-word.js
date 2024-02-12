/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = [];
    for(let ele of s.split(' ')){
        if(ele.length>0)arr.push(ele);
    }
    return arr[arr.length-1].length;
};