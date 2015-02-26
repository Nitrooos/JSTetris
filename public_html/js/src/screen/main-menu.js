tetris.screens['main-menu'] = (function() {

    var firstRun = true;

    function setup() {
        tetris.dom.bind("#main-menu ul.menu", "click", function(e) {
            if (e.target.nodeName.toLowerCase() === "button") {
               var action = e.target.getAttribute("name");
               tetris.game.showScreen(action);
            }
        });
    }

    function run() {
        if (firstRun) {
            setup();
            firstRun = false;
        }
    }

    return {
        run : run
    };

})();
