const readlineSync = require('readline-sync');

// Part A: Print the first N Fibonacci terms
function printFibonacci(n) {
    let sequence = [];
    let first = 0;
    let second = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(first);

        let next = first + second;
        first = second;
        second = next;
    }

    console.log("Fibonacci sequence:", sequence.join(" "));
}

// Part B: Check if a number is a Fibonacci number
function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first < number) {
        let next = first + second;
        first = second;
        second = next;
    }

    return first === number;
}

function main() {
    // Part A
    const n = readlineSync.questionInt("How many terms? ");

    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    printFibonacci(n);

    // Part B
    const number = readlineSync.questionInt("\nEnter a number to check: ");

    if (isFibonacci(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

main();