/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    for(let value of intervals){
        if(res.length>0){
            let [lastEl0,lastEl1] = res[res.length-1];
            let [currEl0,currEl1] = value;
            if(lastEl1<=currEl1 && lastEl1>=currEl0){
                console.log('case1');
                res.pop();
                res.push([lastEl0,currEl1]);
            }
            else if(lastEl1<currEl0){
                console.log('case2');
                res.push(value);
            }
        }
        else{
            res.push(value);
            console.log('start',res,value);
        }
    }
    console.log('end',res);
    return res;
};