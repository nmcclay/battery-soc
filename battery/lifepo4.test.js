// Same as battery sample percentage but for a series of LiFePo4 cells
const LiFePo4 = require("./lifepo4");

test('LiFePo4 Sample Percentage', () => {
    expect(LiFePo4.percentage(13.5, 4)).toBe(0.99);
    expect(LiFePo4.percentage(24.5, 8, 3)).toBe(0.114);
});

// Same as battery sample voltage but for a series of LiFePo4 cells
test('LiFePo4 Sample Voltage', () => {
    expect(LiFePo4.voltage(0.55)).toBe(3.27);
    expect(LiFePo4.voltage(0.55, 1, 3)).toBe(3.269);
    expect(LiFePo4.voltage(0.93, 4)).toBe(13.43);
    expect(LiFePo4.voltage(0.93, 4, 3)).toBe(13.426);
    expect(LiFePo4.voltage(0.05, 8)).toBe(22.4);
});
