// Same as battery sample percentage but for a series of LiFePo4 cells
const battSOC = require("./lifepo4");

test('LiFePo4 Sample Percentage', () => {
    expect(battSOC.lifepo4Percentage(13.5, 4)).toBe(0.99);
    expect(battSOC.lifepo4Percentage(24.5, 8, 3)).toBe(0.114);
});

// Same as battery sample voltage but for a series of LiFePo4 cells
test('LiFePo4 Sample Voltage', () => {
    expect(battSOC.lifepo4Voltage(0.55)).toBe(3.27);
    expect(battSOC.lifepo4Voltage(0.55, 1, 3)).toBe(3.269);
    expect(battSOC.lifepo4Voltage(0.93, 4)).toBe(13.43);
    expect(battSOC.lifepo4Voltage(0.93, 4, 3)).toBe(13.426);
    expect(battSOC.lifepo4Voltage(0.05, 8)).toBe(22.4);
});
