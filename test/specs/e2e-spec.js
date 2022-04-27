const factorialFunction = require('../functions/factorial')

describe('Calculate factorial', () => {
    it('should calculate factorial for a positive number within a range', async () => {
        const resultMessage = $('#resultDiv');
        
        await factorialFunction.calculateNumbersFactorial(9)
        await expect(resultMessage).toHaveTextContaining('The factorial of 9 is: 362880');
    });

    it('should validate message when a special characters', async () => {
        const resultMessage = $('#resultDiv');
        
        await factorialFunction.calculateNumbersFactorial('*')
        await expect(resultMessage).toHaveTextContaining('Please enter an integer');
    });

    it('should validate red border is present around input field when a special character is used', async () => {
        const inputFieldBorder = $('#number[style="border: 2px solid red;"]')
        
        await factorialFunction.calculateNumbersFactorial('*')
        await expect(inputFieldBorder).toBePresent();
    });
});
