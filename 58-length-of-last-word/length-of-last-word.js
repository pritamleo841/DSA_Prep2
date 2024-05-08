/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let t=s.split(' ').reverse();
    for(let ele of t){
        if(ele.length>0)return ele.length;
    }

};