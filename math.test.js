const assert = require('assert');
const math = require('./math');  // Import the math module

// Test the addNumbers function
describe('addNumbers', function () {
    it('should return 15 when adding 5 and 10', function () {
        const result = math.addNumbers(5, 10);
        assert.strictEqual(result, 15);
    });

    it('should throw an error when passing non-numeric values', function () {
        assert.throws(() => math.addNumbers('a', 10), Error, "Please enter valid numbers.");
    });
});

// Test the subtractNumbers function
describe('subtractNumbers', function () {
    it('should return 5 when subtracting 5 from 10', function () {
        const result = math.subtractNumbers(10, 5);
        assert.strictEqual(result, 5);
    });

    it('should throw an error when passing non-numeric values', function () {
        assert.throws(() => math.subtractNumbers('a', 10), Error, "Please enter valid numbers.");
    });
});

// Test the subtractNumbers function
describe('multiplyNumbers', function () {
    it('should return 30 when multiplying 5 and 6', function () {
        const result = math.multiplyNumbers(5, 6);
        assert.strictEqual(result, 30);
    });
});
