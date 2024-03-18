/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function(nums, queries) {
     const pq = new PriorityQueue({
      compare: (e1, e2) => {
        if (e1.value > e2.value) return 1;
        if (e1.value < e2.value) return -1;

        return e1.index < e2.index ? -1 : 1;
      }
    }); 
    nums.forEach((e, i) => {
         pq.enqueue({ index: i, value: e });
    });
    let sum = nums.reduce((a, c) => a + c);
    const marked = new Set();
    const ans = [];
    for (let [i, k] of queries) {
        if (!marked.has(i)) {
            sum -= nums[i];
            marked.add(i);
        }
        while (k && !pq.isEmpty()) {
            const e = pq.dequeue();
            if (!marked.has(e.index)) {
                sum -= nums[e.index];
                marked.add(e.index);
                k--;
            }
        }
        ans.push(sum);
    }
    return ans;
};