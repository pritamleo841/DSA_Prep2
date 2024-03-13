/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    //O(1) space
    let prefixsum=0,postfixsum=0;
    for(let i=1;i<=n;i++){
        prefixsum+=i;
    }
    for(let i=n;i>=1;i--){
        postfixsum+=i;
        if(prefixsum===postfixsum)return i;
        prefixsum-=i;
    }
    return -1;
};