// Write a reverse for loop that prints all numbers from 50 down to 1 that are divisible by 3 but not divisible by 9.

for (let i = 50; i >= 1; i--) {
    if (i % 3 === 0 && i % 9 !== 0) {
        console.log("Number is divisible by 3=" ,i);
    }
}

// Write a reverse for loop that calculates the product of all odd digits of a given number (example: 4729 → 7 × 9 = 63).

