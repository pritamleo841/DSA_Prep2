/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // for(let i=0;i<nums.length;i++){
    //     nums[i]*=nums[i];
    // }
    // return nums.sort((a,b)=>a-b);
    //Two-Pointer Approach
    let result=[];
    let left=0,right=nums.length-1;
    for(let i=nums.length-1;i>=0;i--){
        if(Math.abs(nums[left])>Math.abs(nums[right])){
            result[i]=nums[left]*nums[left];
            left++;
        }else{
            result[i]=nums[right]*nums[right];
            right--;
        }
    }
    return result;
};