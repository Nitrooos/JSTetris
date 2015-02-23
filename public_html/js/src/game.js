tetris.game = (function() {

    function init() {
        tetris.board.initBoard(10, 15);
        tetris.events.bindEvents();
        tetris.draw.loadGraphics();
        tetris.piecesManager.addNewPiece();
    }

    return {
        init: init
    };

})();
