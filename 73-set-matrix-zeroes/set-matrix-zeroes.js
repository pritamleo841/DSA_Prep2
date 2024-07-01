/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //created two dummy arrays to indicate row and col
    let row=[],col=[];
    //if any element is 0, all the row/col elements will be 0
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                row[i]=0;
                col[j]=0;
            }
        }
    }
    //modified in place
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(row[i]==0 || col[j]==0){
                matrix[i][j]=0;
            }
        }
    }
};