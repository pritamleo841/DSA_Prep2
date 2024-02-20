/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map=new Map();
    for(let s of magazine){
        map.set(s,(map.get(s) || 0)+1);
    }
    for(let s of ransomNote){
        if(map.has(s) && map.get(s)>0){
            map.set(s,map.get(s)-1);
            if(map.get(s)<0)return false;
        }else{
            return false;
        }
    }
    return true;
};