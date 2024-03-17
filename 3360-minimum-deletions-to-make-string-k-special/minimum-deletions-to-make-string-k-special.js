/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    let map = new Map();
    for(const char of word){
        map.set(char,(map.get(char)||0)+1);
    }
    
    let vals = [...map.values()].sort((a,b)=>a-b);

    const traverse = (index) => {
        if (index >= vals.length) return 0
        
        let tmp = 0
        const startIndex = binarySearch(vals, vals[index] + k + 1)
        for (let i = startIndex; i < vals.length; i++) {
            if (vals[i] - vals[index] <= k) continue
            tmp += (vals[i] - vals[index] - k)
        }
        
        return Math.min(tmp, vals[index] + traverse(index + 1))
    }
    
    return traverse(0);
};
let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}