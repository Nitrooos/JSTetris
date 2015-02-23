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
                "js/src/events.js"
            ],
            // Funkcja wywoływana po załadowaniu wszystkich plików
            complete: function() {
                console.log("Załadowano wszystkie pliki!");
                tetris.board.initBoard(10, 15);
                tetris.events.bindEvents();
                tetris.draw.loadGraphics();
                tetris.piecesManager.addNewPiece();
            }
        }
    ]);
}, false);
