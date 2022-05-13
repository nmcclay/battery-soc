// num:float, low:float, high:float
exports.interpolate = function(num, low, high) {
    const val = (num - low) / (high - low);
    if (val >= 1) return 1;
    if (val <= 0) return 0;
    return val;
}

// num:float, digits:int
exports.roundToDigit = function(num, digits) {
    const multiple = Math.pow(10, digits);
    return Math.round(num * multiple) / multiple;
}

// num:int, set:[int]
exports.findLower = function(num, set) {
    return set.findIndex((element, index, array) => element <= num && array[index + 1] >= num);
}

// num:int, set:[int]
exports.findUpper = function(num, set) {
    return set.findIndex((element, index, array) => element >= num && array[index - 1] <= num);
}

// num:int, set:[int]
exports.findClosest = function(num, set) {
    const upper = this.findUpper(num, set);
    const lower = this.findLower(num, set);
    const diff = this.interpolate(num, set[lower], set[upper]);
    return diff >= 0.5 ? upper : lower;
}

const getSamplePercentages = function(samples) {
    return samples.map((element) => element[0]);
}

const getSampleVoltages = function(samples) {
    return samples.map((element) => element[1]);
}

exports.samplePercentage = function(volt, samples, digits = 2) {
    const voltages = getSampleVoltages(samples);
    const upper = this.findUpper(volt, voltages);
    const lower = this.findLower(volt, voltages);
    const diff = this.interpolate(volt, samples[lower][1], samples[upper][1]);
    const offset = (samples[upper][0] - samples[lower][0]) * diff;
    return this.roundToDigit(samples[lower][0] + offset, digits);
}

exports.sampleVoltage = function(perc, samples, digits = 2) {
    const percentages = getSamplePercentages(samples);
    const voltages = getSampleVoltages(samples);
    const upper = this.findUpper(perc, percentages);
    const lower = this.findLower(perc, percentages);
    const diff = this.interpolate(perc, percentages[lower], percentages[upper]);
    const offset = (voltages[upper] - voltages[lower]) * diff;
    return this.roundToDigit(voltages[lower] + offset, digits)
}
