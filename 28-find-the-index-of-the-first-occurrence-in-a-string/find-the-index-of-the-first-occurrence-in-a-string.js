/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i=0;;i++){
        for(let j=0;;j++){
            //If needle is traversed
            if(j===needle.length)return i;
            //If exceeded haystack length
            if(i+j===haystack.length)return -1;
            //If at any time, both strings don't match
            if(needle[j]!=haystack[i+j])break;
        }
    }
};