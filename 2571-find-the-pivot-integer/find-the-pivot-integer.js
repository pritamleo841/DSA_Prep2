/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let prefix=[],postfix=[];
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
        prefix.push(sum);
    }
    sum=0;
    for(let i=n;i>=1;i--){
        sum+=i;
        postfix.push(sum);
    }
    for(let i=0;i<n;i++){
        if(prefix[i]===postfix[n-i-1])return i+1;
    }
    return -1;
};