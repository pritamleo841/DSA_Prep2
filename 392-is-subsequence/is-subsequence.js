/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s=="" && t=="")return true;
    let ptr=0;
    for(let char of t){
        if(char === s[ptr]){
            ptr++;
        }
        if(ptr===s.length)return true;
    }
    return false;
};