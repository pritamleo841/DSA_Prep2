/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = new Map();
    //freq of char in s
    for(let char of s){
        map.set(char,(map.get(char)||0)+1);
    }
    //traverse through order
    let index=0;
    let str=[];
    for(let i=0;i<order.length;i++){
        let freq = map.get(order[i] || 0);
        while(freq--){
            str[index++]=order[i];
            map.set(order[i],freq-1);
        }
    }
    console.log(str,map);
    for(const [key,val] of map){
        if(val>0){
            let freq=val;
            while(freq--){
                str[index++]=key;
                map.set(key,freq-1);
            }
        }
    }
    console.log(str,map);
    return str.join('');
};