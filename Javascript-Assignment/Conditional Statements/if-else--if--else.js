// Write a program that takes a month number (1–12) and prints the corresponding season:
// Winter (12, 1, 2), Summer (3, 4, 5), Monsoon (6, 7, 8), Autumn (9, 10, 11).

let month = 10;

if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
} else if (month == 3 || month == 4 || month == 5) {
    console.log("Summer");
} else if (month == 6 || month == 7 || month == 8) {
    console.log("Monsoon");
} else if (month == 9 || month == 10 || month == 11) {
    console.log("Autumn");
} else {
    console.log("Invalid Month");
}

// Create a simple tax calculator based on income:
let income = 850000;
let tax;

if (income < 300000) {
    tax = 0;
} else if (income <= 700000) {
    tax = income * 0.05;
} else if (income <= 1000000) {
    tax = income * 0.10;
} else {
    tax = income * 0.15;
}

console.log("Tax Amount =", tax);

// Write a program that checks a student’s score and prints:
// “Outstanding” (90 and above), “Good” (70–89), “Average” (40–69), “Needs Improvement” (below 40).

let score = 75;

if (score >= 90) {
    console.log("Outstanding");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}

// check the speed of a vehicle and print:
// “Slow” (below 40), “Normal” (40–80), “Fast” (above 80).


let speed = 65;

if (speed < 40) {
    console.log("Slow");
} else if (speed <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}

// Write a program that checks a person’s height (in cm) and prints:
// “Short” (< 150), “Average” (150–170), “Tall” (> 170).

let height = 165;

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}