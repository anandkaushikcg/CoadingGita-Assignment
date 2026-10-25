// Write a do-while loop to print numbers from 10 down to 1.

// let i=10;
// do{
//     console.log(i);
//     i--
// }while(i>=1)

// Write a do-while loop to print all even numbers between 1 and 20.

// let i=2;
// do{
//     console.log(i);
//     i=i+2
// }while(i<=20)

// Write a do-while loop to calculate the sum of the first n natural numbers.

let n = 10;
let i = 1;
let sum = 0;

do {
    sum += i;
    i++;
} while (i <= n);

console.log("Sum =", sum);



// Write a do-while loop to calculate the product of all digits of a given positive integer.

// let num = 234;
// let product = 1;

// do {
//     let digit = num % 10;
//     product *= digit;
//     num = Math.floor(num / 10);
// } while (num > 0);

// console.log(product);


// Write a do-while loop to find the leftmost digit of a given positive integer.
let lastdigit= 58372;

do {
    if (lastdigit < 10) {
        console.log(lastdigit);
    }
    num = Math.floor(lastdigit / 10);
} while (lastdigit > 0);

// Write a do-while loop to calculate the power of a number without using Math.pow() or the exponentiation operator **.

// let base = 3;
// let exponent = 4;

// let result = 1;
// let i = 1;

// do {
//     result *= base;
//     i++;
// } while (i <= exponent);

// console.log(result);

// Write a do-while loop to print all numbers between 1 and 100 that are divisible by 4 but not by 8.


let number = 1;

do {
    if (number % 4 === 0 && number % 8 !== 0) {
        console.log(number);
    }
    number++;
} while (number <= 100);


// Write a do-while loop to check whether a given positive integer is a palindrome without converting it into a string.

let positiveInteger = 1221;
let original = num;
let reverse = 0;

do {
    let digit = positiveInteger % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(positiveInteger / 10);
} while (positiveInteger> 0);

if (original === reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome");
}


// Write a do-while loop to find the greatest common divisor of two positive integers.

let a = 48;
let b = 18;

do {
    let remainder = a % b;
    a = b;
    b = remainder;
} while (b !== 0);

console.log(a);

// Write a do-while loop to convert a non-negative decimal integer into binary without using built-in conversion methods.

let num = 13;

if (num === 0) {
    console.log(0);
} else {
    let binary = "";

    do {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    } while (num > 0);

    console.log(binary);
}


