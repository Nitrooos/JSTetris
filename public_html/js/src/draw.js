tetris.draw = (function() {

    var canvas  = Sizzle('#gameCanvas')[0],
        context = canvas.getContext('2d'),
        graphicsLoader,
        images = {
            'bg': 0,
            'blocks': 1,
            'over': 2
        };

    function loadGraphics() {
        graphicsLoader = new BulkImageLoader();
        graphicsLoader.addImage('asset/image/bg.png', 'bg');
        graphicsLoader.addImage('asset/image/blocks.png', 'blocks');
        graphicsLoader.addImage('asset/image/over.png', 'over');

        graphicsLoader.onReadyCallback = function() {
            console.log('Załadowano obrazki z folderu asset!');
        };
        graphicsLoader.loadImages();
    }

    function drawBoard(board, activePiece) {
        context.drawImage(graphicsLoader.getImageAtIndex(images['bg']), 0, 0, canvas.width, canvas.height);

        var img = graphicsLoader.getImageAtIndex(images['blocks']),
            pieceW = Piece.prototype.width,
            pieceH = Piece.prototype.height;
        for (var i = 0, max_i = board.length; i < max_i; ++i) {
            for (var j = 0, max_j = board[i].length; j < max_j; ++j) {
                if (board[i][j] > 0)
                    context.drawImage(img, (board[i][j] - 1)*pieceW, 0, pieceW, pieceH,
                                      j*pieceW, i*pieceH, pieceW, pieceH);
            }
        }

        // rysuj aktywny klocek
        var state = activePiece.states[activePiece.curState];
        for (var i = 0, max_i = state.length; i < max_i; ++i) {
            for (var j = 0, max_j = state[i].length; j < max_j; ++j) {
                if (state[i][j] > 0)
                    context.drawImage(img, (activePiece.color - 1)*pieceW, 0, pieceW, pieceH,
                                      (activePiece.gridX + j)*pieceW, (activePiece.gridY + i)*pieceH, pieceW, pieceH);
            }
        }

    }

    return {
        loadGraphics: loadGraphics,
        board: drawBoard
    };

})();
