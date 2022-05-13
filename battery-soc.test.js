const battSOC = require('./battery-soc.js');

// Key utility function for interpolating between values
test('Utility Interoplation', () => {
    expect(battSOC.interpolate(3, 1, 5)).toBe(0.5);
    expect(battSOC.interpolate(1, 1, 5)).toBe(0);
    expect(battSOC.interpolate(5, 1, 5)).toBe(1);
    expect(battSOC.interpolate(20, 10, 30)).toBe(0.5);
    expect(battSOC.interpolate(50, 40, 50)).toBe(1);
    expect(battSOC.interpolate(10, 10, 20)).toBe(0);
    expect(battSOC.interpolate(0, 10, 20)).toBe(0);
    expect(battSOC.interpolate(30, 10, 20)).toBe(1);
});

// Utility function for rounding to specific number of decimal places
test('Utility RoundToDigit', () => {
    expect(battSOC.roundToDigit(0.123456789, 1)).toBe(0.1);
    expect(battSOC.roundToDigit(0.123456789, 2)).toBe(0.12);
    expect(battSOC.roundToDigit(0.1256789, 2)).toBe(0.13);
});

// These are utility functions for finding values in sets
test('Utility Lower, Upper & Closest', () => {
    const set = [
        100,
        200,
        300,
        400,
        500
    ]

    expect(battSOC.findLower(251, set)).toBe(1);
    expect(battSOC.findUpper(251, set)).toBe(2);
    expect(battSOC.findClosest(251, set)).toBe(2);
    expect(battSOC.findClosest(249, set)).toBe(1);
})

// Find the percentage state of charge from a set of samples and a current voltage
test('Battery Sample Percentage', () => {
    const samples = [
        [0, 2.8],
        [0.2, 3.0],
        [0.4, 3.6],
        [0.6, 3.7],
        [0.8, 3.8],
        [1, 4.2]
    ]

    expect(battSOC.samplePercentage(3.5, samples)).toBe(0.37);
    expect(battSOC.samplePercentage(3.1, samples, 3)).toBe(0.233);
});

// Find the voltage from a set of samples given a percentage state of charge
test('Battery Sample Voltage', () => {
    const samples = [
        [0, 2.8],
        [0.2, 3.0],
        [0.4, 3.6],
        [0.6, 3.7],
        [0.8, 3.8],
        [1, 4.2]
    ]

    expect(battSOC.sampleVoltage(0.37, samples)).toBe(3.51);
    expect(battSOC.sampleVoltage(0.233, samples)).toBe(3.1);
    expect(battSOC.sampleVoltage(0.233, samples, 3)).toBe(3.099);
});
