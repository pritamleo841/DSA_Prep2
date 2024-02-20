/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    //create a copy of board into temp matrix
    const temp = board.map(m=>m.map(n=>n));
    //Check how many neighbours for each cell (8)
    //[dx,dx]=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    const checkNeighbours = (m,n)=>{
        return [
            temp?.[m - 1]?.[n - 1],
            temp?.[m - 1]?.[n],
            temp?.[m - 1]?.[n + 1],
            temp?.[m]?.[n - 1],
            temp?.[m]?.[n + 1],
            temp?.[m + 1]?.[n - 1],
            temp?.[m + 1]?.[n],
            temp?.[m + 1]?.[n + 1]
        ].filter(Boolean).length;
    };

    //Check cell by rule : 
    //1 ->(2,3)neighbours ->1 else 0
    //0 ->(3)neighbours -> 1 else 0
    const checkCell = (m,n,cellStatus)=>{
        const neighbors = checkNeighbours(m, n);
		return cellStatus === 1 ? neighbors < 2 || neighbors > 3 : neighbors === 3;
    };
    //Update the board by looking into copied original array and checkCell status
    for(let m=0;m<board.length;m++){
        for(let n=0;n<board[0].length;n++){
            const cell = temp[m][n];
            const result = checkCell(m, n, cell);
			board[m][n] = result ? cell === 1 ? 0 : 1 : cell;
        }
    }

};