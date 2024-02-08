/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    /***
    Let the array be - 123456789 and k = 4 :-
      n= 12345678, k =3
      1. 87654321
      2. 67854321
      3. 67812345
    */
    const reverseArray=(left,right)=>{
        while(left < right){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left+=1;
            right-=1;
        }
    };
    //if k is greater than nums.length then one cycle is completed 
    //that means it will remain the same and we have to remainder shifts
    k=k%nums.length;
    //reverse full array
    reverseArray(0,nums.length-1);
    //reverse first part -> upto k
    reverseArray(0,k-1);
    //reverse second part -> k to n-1
    reverseArray(k,nums.length-1);
    return nums;
};
