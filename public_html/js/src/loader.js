var tetris = {
    screens: {},
    settings: {
        rows: 15,
        cols: 10,
        baseScore: 100,
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
                "js/src/draw.js",
                "js/src/board.js",
                "js/src/pieces_manager.js",
                "js/src/events.js",
                "js/src/game.js",
                "js/src/exceptions.js"
            ],
            // Funkcja wywoływana po załadowaniu wszystkich plików
            complete: function() {
                console.log("Załadowano wszystkie pliki!");
                tetris.game.init();
            }
        }
    ]);
}, false);
