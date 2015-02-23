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

        piece.color = Math.floor(Math.random() * 8);
        return piece;
    }

    function addNewPiece() {
        activePiece = getRandomPiece();
    }

    function pullPieceToBottom() {
        var move = tetris.board.pieceToBottom(activePiece);     // o ile pociągnąć klocek w dół?
        activePiece.gridY += move.y;                            // natychmiastowo na dole
        tetris.board.commitMoveCallback();                      // zatwierdź zmianę położenia na tablicy
        addNewPiece();                                          // nowy klocek na górze
    }

    function movePiece(move, commit) {
        console.log('Przesunięto klocek');
        /*if (tetris.board.validMove(activePiece, move)) {
            activePiece.gridX += move.x;
            activePiece.gridY += move.y;
            if (commit === true && tetris.board.commitMoveCallback(activePiece))
                addNewPiece();
        }*/
    }

    return {
        addNewPiece: addNewPiece,
        movePiece: movePiece,
        pullPieceToBottom: pullPieceToBottom
    };

})();
