/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    //Two -Pass Greedy Solution
    const n=ratings.length;
    const candies=new Array(n).fill(1);
    /***
    Now, we iterate through the ratings array from the beginning to the end.
    For each child (except the first), we compare their rating with the one to the left.
    If it's higher, we update the candies array for that child to be one more than the child on the left.
    This takes care of the second condition but only accounts for the child's left neighbor.
    ***/
    for(let i=1;i<n;i++){
        if(ratings[i]>ratings[i-1])candies[i]=candies[i-1]+1;
    }
    /***After the forward pass, we loop through the array again but in the reverse direction.
    This time, we compare each child's rating with the child to their right.
    If the rating is higher, we need to make sure the child has more candies than the right neighbor.
    So, we update the candies array for that child to be the maximum between its current number of candies and one more than the right neighbor's candies.
    This ensures that both neighboring conditions are checked and satisfied.
    ***/

    for(let i=n-2;i>=0;i--){
        if(ratings[i]>ratings[i+1])candies[i]=Math.max(candies[i],candies[i+1]+1);
    }
    /**
    Finally, we sum up all the values in the candies array.
    This will give us the minimum total number of candies that need to be distributed to satisfy both conditions.
    **/
    return candies.reduce((a,b)=>a+b,0);
};