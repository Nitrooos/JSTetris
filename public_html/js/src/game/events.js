tetris.game.events = (function () {

    var keys = {
        LEFT : 37,
        RIGHT: 39,
        UP   : 38,
        DOWN : 40
    },
        intervals = { },
        eventHandles = { };

    function bindEvents(callback) {
        eventHandles.key = function (e) {
            onKeyEvent(e);
            callback();
        },
        eventHandles.refresh = function () {
            tetris.piecesManager.movePiece({ x: 0, y: 1 }, true);
            callback();
        };

        window.addEventListener('keydown', eventHandles.key);
        window.addEventListener('keyup', eventHandles.key);

        intervals.refresh = window.setInterval(eventHandles.refresh, 300);
    }

    function unbindEvents() {
        window.removeEventListener('keydown', eventHandles.key);
        window.removeEventListener('keyup', eventHandles.key);

        window.clearInterval(intervals.refresh);
        window.clearInterval(intervals.key);
    }

    function onKeyEvent(e) {
        switch (e.keyCode) {
            case keys.LEFT:     keyRepeat(function() { tetris.piecesManager.movePiece({ x: -1, y: 0 }); });    break;
            case keys.RIGHT:    keyRepeat(function() { tetris.piecesManager.movePiece({ x:  1, y: 0 }); });    break;
            case keys.UP:       keyRepeat(function() { tetris.piecesManager.rotatePiece();        });    break;
            case keys.DOWN:     keyRepeat(function() { tetris.piecesManager.pullPieceToBottom();  });    break;
        }

        function keyRepeat(repeatFunction) {
            if (e.type === 'keyup') {
                window.clearInterval(intervals.key);
                intervals.key = undefined;
            } else if (e.type === 'keydown' && intervals.key === undefined) {
                repeatFunction();
                intervals.key = window.setInterval(repeatFunction, 300);
            }
        }
    }

    return {
        bindEvents: bindEvents,
        unbindEvents: unbindEvents
    };

})();
