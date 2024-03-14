/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    //Brute Force
    // let count=0;
    // for(let i=0;i<nums.length;i++){
    //     let sum=0;
    //     for(j=i;j<nums.length;j++){
    //         sum+=nums[j];
    //         if(sum===goal){
    //             count++;
    //         }
    //     }
    // }
    // return count;
    //Two -pointer method
    let count=0,i=0,res=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]===1){
            goal--;
            count=0;
        }
        while(goal===0 && i<=j){
            goal+=nums[i];
            i++;
            count++;
            if(i>j-goal+1)break;
        }
        while(goal<0){
            goal+=nums[i];
            i++;
        }
        res+=count;
    }
    return res;

};