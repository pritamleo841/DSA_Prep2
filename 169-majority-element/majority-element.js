/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //Using Map Datastructure - T:O(n)+S:O(n)
    // let map=new Map();
    // for(let i=0;i<nums.length;i++){
    //     map.set(nums[i],(map.get(nums[i]) || 0)+1);
    // }
    // for(let [key,value] of map){
    //     if(value>Math.floor(nums.length/2))return key;
    // }

    //Moore Voting Algorithm
    /****
    The intuition behind the Moore's Voting Algorithm is based on the fact that 
    if there is a majority element in an array, it will always remain in the lead, 
    even after encountering other elements.
    The algorithm works on the basis of the assumption that 
    the majority element occurs more than n/2 times in the array.
    */
    let count=0;
    let candidate=0;
    for(let i=0;i<nums.length;i++){
        if(count===0){ //if count=0, candidate=current_element
            candidate=nums[i];
            count=1; //set count=1, for new candidate
        }
        else if(candidate===nums[i])count++; //if candidate=current_element, count++
        else if(candidate!==nums[i])count--; //if candidate!=current_element, count--
    }
    return candidate;   //return candidate
};