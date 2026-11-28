
// Q31) Predict the output:

console.log(score); // undefined
var score = 90;
console.log(score); // 90


// Explain why the first statement does not produce a `"ReferenceError"`.

// Explanation: Due to the concept of Hoisting JS moves all the variable declarations to top of the code so JS know that the variable score has been declared somewhere in the code and it doesn't give `"ReferenceError"`.

// Q32) What will be the output?


var a = 10;
function test() {
    console.log(a); // undefined
    var a = 20;
    console.log(a); // 20
}
test();


// Why doesn't the first `"console.log()"` print the global value of `"a"`?

// Answer: Due to Hoisting when the function is called it knows that variable `a` is declared somewhere in function so it ignores the `a` in global scope.

// Q33) Identify which statements produce `"undefined"` and explain why:


console.log(first); // undefined
console.log(second); // undefined
var first = 100;
var second = 200;
console.log(first);
console.log(second);


// Explanation: As Hoisting only moves the name of variable declared to the top of the code not the values so JS gives undefined.

// Q34) Predict the output:


function calculate() {
    console.log(total); // undefined
    var total = 50;
    console.log(total); // 50
}
calculate();


// Rewrite the code in a way that represents how the variable declaration is handled during hoisting.


function calculate() {
    console.log(total);
    let total = 50;
    console.log(total);
}
calculate();


// Q35) Find and explain the issue:


var price = 100;
function showPrice() {
    console.log(price); // undefined
    var price = 500;
}
showPrice();
console.log(price); // 100


// Answer the following:

// - What does the first `"console.log()"` inside the function print?

//     => undefined
// - What does the final `"console.log()"` print?

//     => 100
// - How does hoisting affect the local variable `"price"`?

//     => Hoisting has moved the variable declaration `price` at the top of function block.