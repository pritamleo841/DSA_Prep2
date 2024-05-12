/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    /**
    Check if there are 0,0,0 in a window, if yes, put 0,1,0
    If i is first or end element, put 0 next and prev as 0
    */
   let count=0;
   for(let i=0;i<flowerbed.length && count<n;i++){
        if(flowerbed[i]===0){
            let next = (i===flowerbed.length-1)?0:flowerbed[i+1];
            let prev = (i===0)?0:flowerbed[i-1];
            if(next==0 && prev==0){
                flowerbed[i]=1;
                count++;
            }
        }
   }
   return count==n;
};