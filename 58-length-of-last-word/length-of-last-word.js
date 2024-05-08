/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    for(let ele of s.split(' ').reverse()){
        if(ele.length>0)return ele.length;
    }

};