/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const len = s.length;
    //base case
    if(numRows<2 || len<numRows){
        return s;
    }
    //store characters into the array
    const res = new Array(numRows).fill('');
    let turn=false; //signal
    let count=0;
    //traverse through the string
    for(let i=0;i<s.length;i++){
        res[count]+=s[i];
        turn?count--:count++;
        if(count == 0 || count == numRows-1){
            turn=!turn;
        }
    }
    return res.join('');

};