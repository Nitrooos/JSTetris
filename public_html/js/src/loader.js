var tetris = {
    screens: {},
    settings: {
        rows: 15,
        cols: 10,
        baseScore: 50,
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
                "js/src/events.js",
                "js/src/screen/splash.js"
            ],
            // Funkcja wywoływana po załadowaniu wszystkich plików
            complete: function() {
                console.log("Załadowano wszystkie pliki!");
                tetris.game.init();
                tetris.game.showScreen('splash-screen');
            }
        }
    ]);
}, false);
