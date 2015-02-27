var tetris = {
    screens: {},
    settings: {
        rows: 15,
        cols: 10,
        baseScore: 30,
        numPieces: 7
    }
};

// Oczekiwanie na załadowanie głównego dokumentu
window.addEventListener("load", function() {
    // Rozpoczęcie dynamicznego ładowania
    Modernizr.load([
        {
            // Następujące skrypty są ładowane domyślnie
            load: [
                "js/lib/sizzle.js",
                "js/src/bulkImageLoader.js",
                "js/src/draw.js",
                "js/src/pieces.js",
                "js/src/board.js",
                "js/src/pieces_manager.js",
                "js/src/dom.js",
                "js/src/game.js",
                "js/src/game/events.js",
                "js/src/game/score.js",
                "js/src/screen/splash.js",
                "js/src/screen/main-menu.js",
                "js/src/screen/game-screen.js"
            ],
            // Funkcja wywoływana po załadowaniu wszystkich plików
            complete: function() {
                console.log("Załadowano wszystkie pliki!");
                tetris.draw.loadGraphics();
                tetris.game.showScreen('splash-screen');
            }
        }
    ]);
}, false);
