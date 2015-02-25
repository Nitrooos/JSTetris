tetris.screens['splash'] = (function() {

    var firstRun = true;

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
