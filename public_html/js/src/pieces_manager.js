tetris.piecesManager = (function() {

    var activePiece;

    function getRandomPiece() {
        var result = Math.floor(Math.random() * 7),
            piece;

        switch (result) {
            case 0: piece = new LPiece();           break;
            case 1: piece = new ReverseLPiece();    break;
            case 2: piece = new BlockPiece();       break;
            case 3: piece = new LinePiece();        break;
            case 4: piece = new TPiece();           break;
            case 5: piece = new ZPiece();           break;
            case 6: piece = new ReverseZPiece();    break;
        }

        piece.color = Math.floor(Math.random() * 8) + 1;
        return piece;
    }

    function addNewPiece() {
        activePiece = getRandomPiece();
    }

    function pullPieceToBottom() {
        var move = tetris.board.pieceToBottom(activePiece);     // o ile pociągnąć klocek w dół?
        activePiece.gridY += move.y;
        tetris.board.commitMoveCallback(activePiece);
        addNewPiece();
    }

    function movePiece(move, commit) {
        // sprawdź czy ruch jest ok
        if (tetris.board.validMove(activePiece, move)) {
            // wszystko ok
            activePiece.gridX += move.x;
            activePiece.gridY += move.y;
        // ruch nieprawidłowy, spróbuj scommitować
        } else if (commit === true && tetris.board.commitMoveCallback(activePiece)) {
            addNewPiece();
        }
    }

    function rotatePiece() {
        var nextPotentialState = 0;
        if (activePiece.curState !== activePiece.states.length - 1) {
            nextPotentialState = activePiece.curState + 1;
        }
        if (tetris.board.validMove(activePiece, { x: 0, y: 0 }, nextPotentialState))
            activePiece.curState = nextPotentialState;
    }

    function getActivePiece() {
        return activePiece;
    }

    return {
        addNewPiece: addNewPiece,
        movePiece: movePiece,
        rotatePiece: rotatePiece,
        pullPieceToBottom: pullPieceToBottom,
        getActivePiece: getActivePiece
    };

})();
