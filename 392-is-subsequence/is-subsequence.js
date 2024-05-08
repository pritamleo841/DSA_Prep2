/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    if(s.length==0 && t.length==0)return true;
    //take an index and check consequitive elements of s in t
    let index = 0;
    for(let c of t){
        if(c===s[index]){
            index++;
        }
        if(index===s.length)return true;
    }
    return false;

};