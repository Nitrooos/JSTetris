tetris.game = (function() {

    function init() {
        tetris.board.initBoard(10, 15);
        tetris.game.events.bindEvents(stateChange);
        tetris.piecesManager.addNewPiece();         // pierwszy klocek spadający z góry

        renderGameboard();
    }

    // Chowa aktywny ekran i wyświetla ekran o podanym atrybucie id
    function showScreen(screenId) {
        var activeScreen = Sizzle("#game .screen.active")[0],
            screen = Sizzle("#" + screenId)[0];

        if (activeScreen) {
            tetris.dom.removeClass(activeScreen, "active");
        }
        // Uruchamia moduł ekranu
        tetris.screens[screenId].run();
        // Wyświetla ekran
        tetris.dom.addClass(screen, "active");

        console.log(Sizzle("#game .screen.active"));
    }

    function isGameOver() {
        var activePiece = tetris.piecesManager.getActivePiece();
        if (activePiece.gridY < 0 && !tetris.board.validMove(activePiece, { x: 0, y: 1}))
            return true;

        return false;
    }

    function stateChange() {
        var fullLines = tetris.board.checkLines();

        renderGameboard();
        tetris.game.score.refreshScore(fullLines);

        if (isGameOver()) {
            tetris.game.events.unbindEvents();
            tetris.game.score.clearScore();
            tetris.game.showScreen('splash-screen');
        }
    }

    function renderGameboard() {
        tetris.draw.board(tetris.board.getBoard(), tetris.piecesManager.getActivePiece());
    }

    return {
        init: init,
        showScreen: showScreen
    };

})();
