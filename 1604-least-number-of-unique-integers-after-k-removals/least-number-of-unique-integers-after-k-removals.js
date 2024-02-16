/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    //sort the numbers by frequency
    //remove 1 elements from each upto k
    //find total unique elements
    let map = new Map();
    for(let n of arr){
        map.set(n,(map.get(n) || 0)+1);
    }
    // let sarr=Array.from(map.values());
    // let count=0;
    // sarr.sort((a,b)=>a-b);
    // for(let i=0;i<sarr.length;i++){
    //     if(k>sarr[i]){
    //         k=k-sarr[i];
    //         sarr[i]=0;
    //     }
    //     else{
    //         sarr[i]=sarr[i]-k;
    //         k=0;
    //     }
    //     if(sarr[i]!=0)count++;
    // }
    // return count;
    //Using heap
    let pq = new MinPriorityQueue({ priority: x => x.freq });
    for (const [k, v] of map) {
        pq.enqueue({ freq: v });
    }
    while (!pq.isEmpty() && k >= pq.front().element.freq) {
        k -= pq.dequeue().element.freq;
    }
    return pq.size();
};