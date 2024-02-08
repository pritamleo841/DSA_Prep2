/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    //Recursive solution using Set to store unique values only- O(n^n-p*p);
    //TLE
    // let counter=new Set();
    // const recur=(num,count)=>{
    //     if(num===0){
    //         counter.add(count);
    //         return;
    //     }
    //     let p=1;
    //     while(num-p*p>=0){
    //         recur(num-p*p,count+1);
    //         p++;
    //     }
    // };
    // recur(n,0);
    // return Math.min.apply(this, [...counter]);

    //Solution using DP : 
    //The idea is to recreate an dp array with perfect squres only one by one
    let dp=new Array(n+1).fill(Number.MAX_SAFE_INTEGER);
    dp[0]=0;
    let count=1;
    while(count*count<=n){
        let square = count*count;
        for(let i=square;i<=n;i++){
            dp[i]=Math.min(dp[i-square]+1,dp[i]);
        }
        count++;
    }
    return dp[n];
};