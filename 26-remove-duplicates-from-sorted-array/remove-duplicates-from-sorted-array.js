/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniq=nums[0];
    let count=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]==='_')return count;
        if(nums[i]===uniq){
            let id=i;
            while(id<nums.length-1){
                if(nums[id+1]==='_')break;
                nums[id]=nums[id+1];
                id++;
            }
            nums[id]='_';
            i--;
        }
        else{
            uniq=nums[i];
            count++;
        }
    }
};