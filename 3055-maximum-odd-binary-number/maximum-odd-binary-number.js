/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    //Simple funda - last digit should be 1 and remaining ones should be at first
    let [cnt0,cnt1]=[0,0];
    for(let c of s){
        if(c==='1')cnt1++;
        if(c==='0')cnt0++;
    }
    return '1'.repeat(cnt1-1)+'0'.repeat(cnt0)+'1';
};