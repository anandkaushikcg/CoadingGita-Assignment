

// Q36) Predict the output:


sayHello(); // Hello from CodingGita
function sayHello() {
    console.log("Hello from CodingGita");
}


// Explain why this works even though the function is called before it is written.

// Explanation: Unlike Hoisting of variable JS moves code of function along with its name at top due to Hoisting.

// Q37) What will be the output? Explain the difference from a normal `var` variable.


display(); // Function is hoisted completely
function display() {
    console.log("Function is hoisted completely");
}


// Explanation: Hoisting of `var` only brings its name at top of code but hoisting of `function` brings complete code of function at top of code.

// Q38) Find and explain the issue (if any):


console.log(greet); // greet()
var greet = function() {
    console.log("Hi");
};


// Why does this behave differently from a function declaration?

// => In hoisting concept of function expression here `greet` is a variable for JS so `greet()` at top of code gives reference error but `greet` gives undefined like variable declared using var.

// Q39) Predict the output:


console.log(typeof myFunc); // function
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc()); // I am hoisted


// Q40) Write a small program that:

// - Calls a function **before** its declaration.
// - The function prints a message using a global variable.
// - Demonstrates that the entire function (name + body) is available due to hoisting.


var greet = "Hello"
myFunc();
function myFunc() {
    console.log(greet)
}
