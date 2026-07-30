const readlineSync = require('readline-sync');

// Part A: Print a single multiplication table
function printSingleTable(number) {
    console.log(`\nMultiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Part B: Print multiplication tables from 1 to N
function printTablesUpToN(n) {
    for (let number = 1; number <= n; number++) {
        console.log(`\nMultiplication Table for ${number}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }

        console.log("---------------------------");
    }
}

function main() {
    // Part A
    const number = readlineSync.questionInt(
        "Enter a number for a multiplication table: "
    );

    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    printSingleTable(number);

    // Part B
    const n = readlineSync.questionInt(
        "\nEnter a number N to print tables from 1 to N: "
    );

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    printTablesUpToN(n);
}

main();
