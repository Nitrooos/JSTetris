tetris.board = (function () {
    var board = [];
    
    function initBoard(width, height) {
        for (var y = 0; y < height; ++y) {
            board[y] = [];
            for (var x = 0; x < width; ++x) {
                board[y][x] = 0;
            }
        }
    }
    
    function validMove(piece, move) {
        var state = piece.states[piece.curState];
        for (var y = 0; y < state.length; ++y)
            for (var x = 0; x < state[y].length; ++x)
                if (board[piece.gridY + y + move.y][piece.gridX + x + move.x] &&
                    state[y][x])
                    return false;
        return true;
    }
    
    function movePiece(piece, move) {
        if (piece instanceof Piece && move !== undefined &&
            validMove(piece, move)) {
            piece.gridY += move.y;
            piece.gridX += move.x;
        }
    }
    
    function getBoard() {
        return board;
    }
    
    return {
        initBoard: initBoard,
        movePiece: movePiece,
        getBoard: getBoard
    };
    
})();