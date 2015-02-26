tetris.game = (function() {

    var score = {
        counterLines: 0,
        points: 0
    };

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
        var fullLines = tetris.board.checkLines(),
            counter = Sizzle('#lines')[0],
            points = Sizzle('#points')[0];

        score.counterLines += fullLines;
        score.points       += Math.pow(fullLines, 2)*tetris.settings.baseScore;
        counter.innerHTML   = score.counterLines;
        points.innerHTML    = score.points;

        renderGameboard();

        if (isGameOver()) {
            tetris.game.events.unbindEvents();
            score.counterLines = score.points = 0;
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
