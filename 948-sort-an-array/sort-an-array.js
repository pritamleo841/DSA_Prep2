/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    //return nums.sort((a,b)=>a-b);
    const quickSort = (start,end)=>{
        if(start>=end)return;

        let [left,right]=[start,end];
        //taking middle element as pivot
        let pivot = nums[Math.floor((start+end)/2)];
        while(left<=right){
            while(left<=right && nums[left]<pivot)left++;
            while(left<=right && nums[right]>pivot)right--;
            if(left<=right){
                let temp = nums[left];
                nums[left]=nums[right];
                nums[right]=temp;
                left++;
                right--;
            }
        }
        quickSort(start,right);
        quickSort(left,end);
    };
    if(nums.length===1)return nums;
    quickSort(0,nums.length-1);
    return nums;
};

