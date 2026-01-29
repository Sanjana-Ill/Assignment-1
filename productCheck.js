// productCheck.js

// basic plan for the program:
// - keep asking the user for numbers until they type q/Q
// - make sure the input is actually an integer
// - save all valid numbers
// - after quitting, check if any two numbers multiply to make another one
// - print the right message based on what we find

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// arr = holds all the integers the user enters
let arr = [];

// ask() = keeps looping and getting input from the user
function ask() {
    rl.question("Enter an integer or q to quit: ", (inp) => {

        // inp = whatever the user typed
        // if they typed q or Q, we stop collecting and check the condition
        if (inp === "q" || inp === "Q") {
            checkCond();
            rl.close();
            return;
        }

        // n = the input converted to an integer
        let n = parseInt(inp);

        // if the input isn't an integer, tell them and ask again
        if (isNaN(n)) {
            console.log("Error: please enter an integer or q.");
            ask();
            return;
        }

        // echo the number back so the user sees what was accepted
        console.log("You entered:", n);

        // add the number to arr
        arr.push(n);

        // keep going
        ask();
    });
}

// checkCond() = looks through arr to see if any two numbers multiply to a third
function checkCond() {

    // if we don't have at least 3 numbers, we can't check anything meaningful
    if (arr.length < 3) {
        console.log("Not enough integers to check the condition.");
        return;
    }

    // i, j, k = index positions for comparing all combos
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {

                // make sure we're not comparing the same index to itself
                if (i !== j && j !== k && i !== k) {

                    // check if arr[i] * arr[j] equals arr[k]
                    if (arr[i] * arr[j] === arr[k]) {
                        console.log(`Condition is met: ${arr[i]} x ${arr[j]} = ${arr[k]}`);
                        return;
                    }
                }
            }
        }
    }

    // if we finish all loops and find nothing, then the condition wasn't met
    console.log("Condition was not met.");
}

// start the whole thing
ask();
