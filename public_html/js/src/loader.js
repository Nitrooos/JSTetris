var teris = {
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
                "js/src/pieces.js"
            ],
            // Funkcja wywoływana po załadowaniu wszystkich plików
            complete: function() {
                console.log("Załadowano wszystkie pliki!");
            }
        }
    ]);
}, false);
