

// Q26) Predict the output:


function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10); // 1 2 3
    }
    console.log("Final:", number); // Final: 4
}
calculate();


// Explain why `"number"` is accessible after the loop but not outside the function.

// Explanation: As `var` is a function scope declaration it ignores the block of `for` loop and can be accessible outside loop but it can't be accessed outside function.

// Q27) Identify which statements cause errors:


function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks); // RefErr


// Explain your answer for each occurrence of `"marks"`.

// Explanation: 1st occurrence(Inside for loop):- Marks will be printed as it is declared inside

// 2nd occurrence(inside function):- Marks will be printed as `var` ignores block of `for` loop

// 3rd occurrence(outside function):- Reference Error=> `var` functional scope will not be accessible outside function.

// Q28) Predict the output:


function test() {
    var value = 5;
    while (value < 8) {
        console.log(value); // 5 6 7
        value++;
    }
    console.log("Final value:", value); // Final value: 8
}
test();


// How many times does the loop execute?

// Explanation: Loop executes 4 times.

// Q29) Find and explain the error:


function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i); // RefErr => As var is a functional scope variable will not be accessible outside the function.
calculate();


// Why does the order of these statements matter?

// Answer: As we tried to access `i` before function calling so it given error before executing function.

// Q30) Write a function named `"printNumbers()"` that:

// - Uses a `"for"` loop to print numbers from 1 to 5.
// - Declares the loop variable using `"var"`.
// - Prints the loop variable again after the loop, inside the function.
// - Demonstrates that the loop variable cannot be accessed outside the function.

// Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.


function printNumbers(){
    for (var i=1; i<=5; i++){
        console.log(i)
    }
    console.log("After:",i)
}
printNumbers()
console.log(i)


// Error occurs when we try to access a variable declared by `var` outside a function.