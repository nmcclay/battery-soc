const battSOC = require('../battery-soc');

// single cell discharge samples, [%:float, voltage:float]
const lifepo4Cell = [
    [0, 2.5],
    [0.05, 2.8],
    [0.095, 3.0],
    [0.14, 3.15],
    [0.2, 3.2],
    [0.3, 3.225],
    [0.4, 3.25],
    [0.5, 3.263],
    [0.6, 3.275],
    [0.7, 3.3],
    [0.8, 3.325],
    [0.9, 3.35],
    [0.96, 3.363],
    [0.99, 3.375],
    [0.995, 3.45],
    [1, 3.65]
]

const lifepo4SeriesSamples = function(series = 1) {
    return lifepo4Cell.map((element) => [element[0], element[1] * series]);
}

exports.lifepo4Percentage = function(volt, series = 1, digits = 2) {
    return battSOC.samplePercentage(volt, lifepo4SeriesSamples(series), digits);
};

exports.lifepo4Voltage = function(perc, series = 1, digits = 2) {
    return battSOC.sampleVoltage(perc, lifepo4SeriesSamples(series), digits);
}
