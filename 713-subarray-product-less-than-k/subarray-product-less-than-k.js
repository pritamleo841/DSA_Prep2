/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    //Brute-Force Method
    // let count=0;
    // let prod = 1;
    // for(let i=0;i<nums.length;i++){
    //     prod=nums[i];
    //     if(prod<k){
    //         count++;
    //         for(let j=i+1;j<nums.length;j++){
    //             prod=prod*nums[j];
    //             if(prod<k)count++;
    //         }
    //     }
    // }
    // return count;
    
    //Two Pointer - Sliding Window
    //idea - keep numbers in window where product<k
    let count=0;
    let prod=1;
    let left=0;
    for(let right=0;right<nums.length;right++){
        prod=prod*nums[right];
        //pop elements from window and increment left pointer
        while(prod>=k && left<=right){
            prod=prod/nums[left];
            left++;
        }
        count+=(right-left+1); //add length of window as count
    }
    return count;
};