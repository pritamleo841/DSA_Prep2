/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let n=nums.length;
    let maxEle = Math.max(...nums);
    let count=0,ans=0;
    let start=0,end=0;

    for(end=0;end<n;end++){
        if(nums[end]===maxEle){
            count++;
        }
        if(count>=k){
            //Slide the window from the left side and count subarrays containing the maximum element
            for(;count>=k;start++){
                //Count subarrays where maximum element is from j to n-1
                ans+=n-end;
                if(nums[start]===maxEle){
                    //Decrease count as the window slides
                    count--;
                }
            }
        }
    }
    return ans;
};