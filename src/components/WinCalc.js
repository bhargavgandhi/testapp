const generateLikelihood = function generateAntWinLikelihoodCalculator() {
    //var delay = 7000 + Math.random() * 7000;
    var delay = 1000;
    var likelihoodOfAntWinning = Math.random();

    return function (callback) {
        setTimeout(function () {
            callback(likelihoodOfAntWinning);
        }, delay);
    };
}

export default generateLikelihood;