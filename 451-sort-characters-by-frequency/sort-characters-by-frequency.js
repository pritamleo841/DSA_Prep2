/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    /**
    1. Store frequency in a map
    2. Sort the map in descending order wrt frequency
    3. Make a string with the characters
    */
    //Step 1
    let map=new Map();
    for(let char of s){
        map.set(char,(map.get(char) || 0) +1);
    }
    //Step 2
    map=new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));
    console.log(map);
    //Step 3
    let str="";
    for(let [key,value] of map){
        let t="";
        while(value--)t+=key;
        str+=t;
    }
    return str;
};