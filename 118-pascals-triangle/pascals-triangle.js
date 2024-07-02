/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //nCr formular
    const fact = (n) =>{
        if(n<1)return 1;
        return n*fact(n-1);
    };
    
    const ncr = (n,r)=>{
        return (fact(n)/(fact(n-r)*fact(r)));
    };

    let res=[];
    for(let i=0;i<numRows;i++){
        let comb=[];
        for(let j=0;j<=i;j++){
            comb.push(ncr(i,j));
        }
        res.push(comb);
    }
    return res;
};