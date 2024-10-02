// Import the math namespace from math.js
const math = require('./math');

// Call the addNumbers and subtractNumbers functions
try {
    const num1 = 5;
    const num2 = 10;

    const sum = math.addNumbers(num1, num2);
    console.log(`The result of adding ${num1} and ${num2} is: ${sum}`);

    const difference = math.subtractNumbers(num2, num1);
    console.log(`The result of subtracting ${num1} from ${num2} is: ${difference}`);
} catch (error) {
    console.error(error.message);
}

