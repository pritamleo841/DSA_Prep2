/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxNum=0;
    let count=0;
    for(let c of s){
        if(c==='('){
            count++;
            maxNum=Math.max(maxNum,count); //save maximum depth
        }
        else if(c===')'){
            count--;
        }
    }
    return maxNum;
};