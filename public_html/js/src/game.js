tetris.game = (function() {

    function init() {
        tetris.board.initBoard(10, 15);
        tetris.draw.loadGraphics();
        tetris.events.bindEvents(onRender);
        tetris.piecesManager.addNewPiece();         // pierwszy klocek spadający z góry
    }

    function isGameOver() {
        var activePiece = tetris.piecesManager.getActivePiece();
        if (activePiece.gridY < 0 && !tetris.board.validMove(activePiece, { x: 0, y: 1}))
            return true;

        return false;
    }

    function onRender() {
        if (!isGameOver())
            tetris.draw.board(tetris.board.getBoard(), tetris.piecesManager.getActivePiece());
        else
            console.log('GameOver');
    }

    return {
        init: init,
        isGameOver: isGameOver
    };

})();
