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

    function checkLines(activePiece) {
        function removeLines(lines) {

            lines.forEach(function(element, index, array) {
                for (var i = 0, max_i = board[element].length; i < max_i; ++i) {
                    board[element][i] = 0;
                }
            });

            for (var i = lines[0] - 1; i >= 0; --i) {
                for (var j = 0, max_j = board[i].length; j < max_j; ++j) {
                    board[i + lines.length][j] = board[i][j];
                }
            }
        }

        var linesToRemove = [];
        for (var i = 0, max_i = board.length; i < max_i; ++i) {
            var isLineFull = true;
            for (var j = 0, max_j = board[i].length; j < max_j; ++j) {
                if (board[i][j] === 0) {
                    isLineFull = false;
                    break;
                }
            }
            if (isLineFull)
                linesToRemove.push(i);
        }
        removeLines(linesToRemove);

        return linesToRemove.length;
    }

    function endOfFall(activePiece) {
        if (validMove(activePiece, { x: 0, y: 1 }))
            return false;
        return true;
    }

    // klocek już nie spada (uaktualnij board)
    function freezePiece(piece) {
        var state = piece.states[piece.curState];
        for (var i = 0, max_i = state.length; i < max_i; ++i) {
            for (var j = 0, max_j = state[i].length; j < max_j; ++j) {
                var field = board[piece.gridY + i][piece.gridX + j];
                if (field === 0)
                    board[piece.gridY + i][piece.gridX + j] = state[i][j]*piece.color;
            }
        }
    }

    // zwraca true jeśli należy utworzyć nowy klocek
    // (koniec spadania poprzedniego)
    function commitMoveCallback(activePiece) {
        if (activePiece instanceof Piece && endOfFall(activePiece)) {
            if (activePiece.gridY >= 0) {
                freezePiece(activePiece);
                return true;
            } else
                return false;
        }
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
        checkLines: checkLines,
        getBoard: getBoard
    };

})();
