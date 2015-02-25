tetris.screens['splash-screen'] = (function() {

    var firstRun = true;

    function setup() {
        tetris.dom.bind('#splash-screen', 'click', function() {
            tetris.game.showScreen('main-menu');
        });
    }

    function run() {
        if (firstRun) {
            setup();
            firstRun = false;
        }
    }

    return {
        run: run
    };

})();
