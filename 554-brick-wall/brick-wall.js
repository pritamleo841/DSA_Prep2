/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let map = new Map();
    map.set(0,0); //if there are no gaps
    const width = wall[0].reduce((a,c)=>a+c,0);

    for(let i=0;i<wall.length;i++){
        let currentWidth = 0;
        for(let j=0;j<wall[i].length;j++){
            currentWidth+=wall[i][j];
            map.set(currentWidth,(map.get(currentWidth) || 0)+1);
        }
    }

    map.delete(width); //cannot use the last position

    return wall.length-Math.max(...map.values());
};