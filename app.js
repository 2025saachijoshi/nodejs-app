const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(num) {
    num = parseInt(num);
    let fact = 1;

    if (num < 0) {
        console.log("Factorial is not defined for negative numbers.");
    } else {
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log("Factorial is: " + fact);
    }

    rl.close();
});