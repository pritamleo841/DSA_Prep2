/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive=0,negetive=1;
    let result=new Array(nums.length);

    for(let i=0;i<nums.length;i++){
        if(nums[i]>=0){
            result[positive]=nums[i];
            positive+=2;
        }
        else{
            result[negetive]=nums[i];
            negetive+=2;
        }
    }
    return result;
};