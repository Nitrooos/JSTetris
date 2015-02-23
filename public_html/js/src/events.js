tetris.events = (function () {

    var keys = {
        LEFT : 37,
        RIGHT: 39,
        UP   : 38,
        DOWN : 40
    },
        keyInterval;

    function bindEvents() {
        window.addEventListener('keydown', onKeyEvent);
        window.addEventListener('keyup', onKeyEvent);

        window.setInterval(function() { tetris.piecesManager.movePiece({ y: 1 }, true); }, 1000);
    }

    function onKeyEvent(e) {
        switch (e.keyCode) {
            case keys.LEFT:     keyRepeat(function() { tetris.piecesManager.movePiece({ x: -1 }); });    break;
            case keys.RIGHT:    keyRepeat(function() { tetris.piecesManager.movePiece({ x:  1 }); });    break;
            case keys.UP:       keyRepeat(function() { tetris.piecesManager.rotatePiece();        });    break;
            case keys.DOWN:     keyRepeat(function() { tetris.piecesManager.pullPieceToBottom();  });    break;
        }

        function keyRepeat(repeatFunction) {
            if (e.type === 'keyup') {
                window.clearInterval(keyInterval);
                keyInterval = undefined;
            } else if (e.type === 'keydown' && keyInterval === undefined) {
                repeatFunction();
                keyInterval = window.setInterval(repeatFunction, 1000);
            }
        }

    }

    return {
        bindEvents: bindEvents
    };

})();
