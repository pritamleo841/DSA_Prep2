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

    //Solution using DP : O(n*sqrt(n))
    //The idea is to recreate an dp array with perfect squres only one by one
    /***
    Iterative Calculation: 
    Iterates from 1 to n to calculate the minimum number of perfect squares required 
    for each number.

    Inner Loop: 
    For each number i, iterates over all perfect squares less than or equal to i 
    (from 1 to sqrt(i)) to find the minimum number of perfect squares required.

    Updating dp[i]: 
    Updates dp[i] with the minimum value found by comparing it with the current value of 
    dp[i - j * j] + 1, where j * j represents the perfect square being considered.
    */
    let dp=new Array(n+1).fill(Number.MAX_SAFE_INTEGER);
    dp[0]=0;
    let count=1;
    while(count*count<=n){
        let square = count*count;
        //s=9
        for(let i=square;i<=n;i++){
            //dp[9-9]+1=> dp[0]+1,dp[9]
            dp[i]=Math.min(dp[i-square]+1,dp[i]);
        }
        count++;
    }
    return dp[n];
};