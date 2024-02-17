/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    //O(nlogn) for heapify operation
    //O(n) for heap
    const pq= new MaxPriorityQueue({priority:x=>x}); //bricks used
    let i=0;
    for(i=0;i<heights.length-1;i++){
        //no bricks/ladder required
        if(heights[i]>=heights[i+1])continue;
        const diff = heights[i+1]-heights[i];
        if(diff>bricks) //if enough bricks are left
        {
            //if not enough ladders are left
            if(ladders===0)break;
            //if max bricks used at once > current jump
            //replace the max bricks with a ladder , use those bricks for current jump
            //else use ladder
            if(!pq.isEmpty() && pq.front().element>diff){
                bricks+=pq.dequeue().element - diff;
                pq.enqueue(diff);
            }
            ladders--;
        }else{ //greedylu use bricks when possible
            bricks-=diff;
            pq.enqueue(diff);
        }
    }
    return i;
};