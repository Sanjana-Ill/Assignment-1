const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function askForNumber() {
    rl.question("Enter an integer (or 'q' to quit): ", (input) => {
        if (input.toLowerCase() === "q") {
            finish();
            return;
        }

        let num = parseInt(input);

        if (isNaN(num)) {
            console.log("Invalid input. Please enter a valid integer.");
        } else {
            numbers.push(num);
        }

        askForNumber();
    });
}

function finish() {
    if (numbers.length === 0) {
        console.log("No numbers were entered.");
        rl.close();
        return;
    }

    let sum = numbers.reduce((acc, val) => acc + val, 0);
    let mean = sum / numbers.length;

    numbers.sort((a, b) => a - b);
    let mid = Math.floor(numbers.length / 2);
    let median = numbers.length % 2 === 0
        ? (numbers[mid - 1] + numbers[mid]) / 2
        : numbers[mid];

    console.log("\nNumbers entered:", numbers);
    console.log("Mean:", mean);
    console.log("Median:", median);

    rl.close();
}

askForNumber();
