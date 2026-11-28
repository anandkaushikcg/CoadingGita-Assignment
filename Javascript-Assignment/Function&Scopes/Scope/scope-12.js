
// Q56) What is the problem in this code?


function test() {
    x = 100; // var is not used here (variable not declared)
}
test();
console.log(x);


// Explain the unintended side effect.

// => This makes `x` a global property making it accessible everywhere.

// Q57) Predict the output and explain the misconception:


if (true) {
    var x = 20;
}


// Why do beginners often expect an error here?

// => Beginners expects an error here as they think blocks of `if` will make the variable declared local like `function` but `var` is a functional scoped declaration not block scoped so it ignores the blocks of `if`.

// Q58) What happens here?


console.log(a); // undefined
var a = 10;


// Explain why there is no `ReferenceError` and what value is printed.

// Explanation: Due to hoisting JS knows that variable a is declared somewhere in code but ot doesn't know the value assigned to it so it prints `undefined`

// Q59) Find the issue:


var x = 10;
var x = 20;
console.log(x); // 20


// Is this allowed with `var`? Why can it become confusing?

// => Yes, redeclaration is allowed with `var` but it becomes confusing as declaring the same variable twice with two different values make other coders think about the actual value needed in code.

// Q60) Rewrite the following code to avoid the common error of accidentally creating a global variable, and also make the variable properly scoped:


function calculate() {
    total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();
console.log(total); // currently works, but should not


// => Corrected code


function calculate() {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();
console.log(total);
