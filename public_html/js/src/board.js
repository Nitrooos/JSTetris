tetris.board = (function () {
    var board = [],
        WIDTH,
        HEIGHT;
    
    function initBoard(width, height) {
        WIDTH = width;
        HEIGHT = height;
        for (var y = 0; y < HEIGHT; ++y) {
            board[y] = [];
            for (var x = 0; x < WIDTH; ++x) {
                board[y][x] = 0;
            }
        }
    }
    
    function inBoard(x, y) {
        if (x >= 0 && x < WIDTH && y < HEIGHT)
            return true;
        return false;
    }
    
    function overlap(x, y, state) {
        if (y < 0 || state === 0 || board[y][x] === 0)
            return false;
        return true;
    }
    
    function validMove(piece, move, stateNum) {
        if (!(piece instanceof Piece) || move === undefined)
            return false;
        stateNum = stateNum || piece.curState;
        
        var state = piece.states[stateNum];
        for (var i = 0; i < state.length; ++i)
            for (var j = 0; j < state[i].length; ++j) {
                var x = piece.gridX + j + move.x,
                    y = piece.gridY + i + move.y;
                if (!inBoard(x, y) || overlap(x, y, state[i][j]))
                    return false;
            }
        return true;
    }
    
    function endOfFall(activePiece) {
        if (validMove(activePiece, { x: 0, y: 1 }))
            return false;
        return true;
    }
    
    // zwraca true jeśli należy utworzyć nowy klocek
    // (koniec spadania poprzedniego)
    function commitMoveCallback(activePiece) {
        if (activePiece instanceof Piece && endOfFall(activePiece))
            return true;
        return false;
    }
    
    // zwraca ruch, który spowoduje "pociągnięcie" klocka na dół planszy
    function pieceToBottom(activePiece) {
        if (activePiece instanceof Piece) {
            var i = 1;
            while (validMove(activePiece, { x: 0, y: i }))
                ++i;

            return { x: 0, y: i - 1};
        }
        return undefined;
    }
    
    function getBoard() {
        return board;
    }
    
    return {
        initBoard: initBoard,
        validMove: validMove,
        commitMoveCallback: commitMoveCallback,
        pieceToBottom: pieceToBottom,
        getBoard: getBoard
    };
    
})();