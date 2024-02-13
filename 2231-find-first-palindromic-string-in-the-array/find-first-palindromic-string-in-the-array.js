/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const checkPalindrome = (s)=>{
        return (s===s.split('').reverse().join('')?true:false)
    };
    for(let i=0;i<words.length;i++){
        let item=words[i];
        if(item[0]===item[item.length-1] && checkPalindrome(item)){
            return item;
        }
    }
    return "";
};