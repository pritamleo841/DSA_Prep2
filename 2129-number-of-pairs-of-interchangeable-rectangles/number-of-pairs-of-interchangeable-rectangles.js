/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    /**
    Idea is very easy.
     - We need to find the ratio of width and height for each rectangle in the vector.
     - Now, if we have already seen that ratio earlier in the map, simply add the count of ratio to result. 
       It includes all the possbile combinations of rectangle pairs with same ratio.
      -Also, increment the count of current ratio in the map as it denotes the number of rectangle with current ratio.
     */
    let ratio = {};
    let count=0;

    for(let i=0;i<rectangles.length;i++){
        const rect = rectangles[i];
        let r = rect[0]/rect[1];

        if(!ratio[r]){
            ratio[r]=0;
        }
        count+=ratio[r]; //count number of ratios in map
        ratio[r]++; //if there is a same ratio, increment count
    }
    return count;
};