// Nested if Statement
// Check if a number is greater than 10.
// If yes, then check whether it is divisible by 3 and print the appropriate message.

let num = 15;

if (num > 10) {
    if (num % 3 === 0) {
        console.log("Number is greater than 10 and divisible by 3");
    } else {
        console.log("Number is greater than 10 but not divisible by 3");
    }
} else {
    console.log("Number is not greater than 10");
}

// Write a program that first checks if a person is 18 or older.
// If yes, then check if they have a voter ID. Print “Can Vote” only if both conditions are true.

let age = 20;
let hasVoterID = true;

if (age >= 18) {
    if (hasVoterID) {
        console.log("Can Vote");
    } else {
        console.log("Voter ID required");
    }
} else {
    console.log("Not eligible to vote");
}

// Check if a student has scored 40 or more marks.
// If yes, then check if the score is 80 or above and print “Passed with Distinction”.

let marks = 85;

if (marks >= 40) {
    if (marks >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}

// Create a simple ATM system:
// First check if the PIN is correct.
// If PIN is correct, then check if the account balance is sufficient for withdrawal.

let enteredPIN = 1234;
let correctPIN = 1234;
let balance = 5000;
let withdrawal = 2000;

if (enteredPIN === correctPIN) {
    if (balance >= withdrawal) {
        console.log("Withdrawal Successful");
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}
// Write a program that checks if a year is divisible by 4.
// If yes, then further check if it is divisible by 100.
// If it is divisible by 100, then check if it is also divisible by 400 to confirm it is a leap year.

let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}