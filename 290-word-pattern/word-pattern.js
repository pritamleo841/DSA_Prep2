/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
   const newMap = (str1,str2)=>{
       let [map1,map2] =[new Map(),new Map()];
       let i=0;
       while(i<str1.length){
           map1.set(str1[i],str2[i]);
           map2.set(str2[i],str1[i]);
           i++;
       }
       return [map1,map2];
   };

   let sarray = s.split(' ');
   if(pattern.length!=sarray.length)return false;
   let [map1,map2] = newMap(pattern,sarray);
   if(map1.size!=map2.size)return false;
   let i=0;
   while(i<map1.size){
       if(
           (map1.get(pattern[i])!=sarray[i]) ||
           (map2.get(sarray[i])!=pattern[i])
       )return false;
       i++;
   }
   return true;
};