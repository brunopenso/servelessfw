const calc = require('./Calculator');

test('add 1 + 2 eq 3', () => {
    expect(calc.MethodSum(1,2)).toBe(3);
});

test('param 2 string', () => {
    expect(calc.MethodSum(1,4)).toThrow('Invalid Number');
}); 