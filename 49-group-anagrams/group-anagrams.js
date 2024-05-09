/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    //sort each word in strs array
    const sortedStr = strs.map(s=>s.split('').sort().join(''));
    let map = {};
    for(let i=0;i<strs.length;i++){
        if(!map[sortedStr[i]]){
            map[sortedStr[i]]=[strs[i]];
        }else{
            map[sortedStr[i]].push(strs[i]);
        }
    }
    //return array of object values
    return Object.values(map);
};