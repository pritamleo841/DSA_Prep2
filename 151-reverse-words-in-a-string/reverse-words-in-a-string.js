/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   //return s.trim().split(' ').reverse().filter(s=>s!='').join(' ');
   let stack = [];
   let temp=s.split(' ');
   let i=0;
   while(i<temp.length){
       stack.push(temp[i++]);
   }
   temp=[];
   while(stack.length){
       let item=stack.pop();
       if(item.length>0) temp.push(item);
   }
   return temp.join(' ');

};