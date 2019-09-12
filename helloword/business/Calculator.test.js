const calc = require('./Calculator');

test('add 1 + 2 eq 3', () => {
    expect(calc.MethodSum(1,2)).toBe(3);
});

test('param 1 string', () => {
    try {
        calc.MethodSum('a',2)
        expect(1).toBe(2);
    } catch (error) {
        expect(error.toString()).toBe('Error: Invalid Number');
    }
}); 

test('param 2 string', () => {
    try {
        calc.MethodSum(1,'b')
        expect(1).toBe(2);
    } catch (error) {
        expect(error.toString()).toBe('Error: Invalid Number');
    }
}); 

test('both string', () => {
    expect(calc.MethodSum('3','5')).toBe(8);
}); 