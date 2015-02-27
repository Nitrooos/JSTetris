tetris.game.score = (function() {

    var score = {
        counterLines: 0,
        points: 0
    },
        counter = Sizzle('#lines')[0],
        points  = Sizzle('#points')[0];

    function refreshScore(lines) {
        score.counterLines += lines;
        score.points       += Math.pow(lines, 2)*tetris.settings.baseScore;
        counter.innerHTML   = score.counterLines;
        points.innerHTML    = score.points;
    }

    function clearScore() {
        score.points = score.counterLines = 0;
        counter.innerHTML = 0;
        points.innerHTML  = 0;
    }

    return {
        refreshScore: refreshScore,
        clearScore: clearScore
    };

})();
