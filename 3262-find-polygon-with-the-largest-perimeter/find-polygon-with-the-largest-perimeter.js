/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    /**
    The largest polygon can be formed only by
    taking the sides in the increasing order until 
    you are able to form a valid triangle(type of polygons).

    Sort the array,Initialize variables,Iterate through the sorted array.
    Check polygon condition:
        For each number, check if it's smaller than the sum of all previous numbers encountered.
    Update largest perimeter:
        If the condition is met, update ans with the sum of the current num
    */
    nums.sort((a,b)=>a-b);
    let [currSum,largestPerimeter]=[0,-1];

    for(let n of nums){
        if(n<currSum){
            largestPerimeter=n+currSum;
        }
        currSum+=n;
    }
    return largestPerimeter;
};