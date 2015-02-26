tetris.screens['game-screen'] = (function() {

    function setup() {
        tetris.game.init();
    }

    function run() {
        setup();
    }

    return {
        run : run
    };

})();
