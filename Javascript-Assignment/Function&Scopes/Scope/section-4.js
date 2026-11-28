

// Q11) Predict the output:


function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal(); // 300
console.log(first); // RefErr


// Explain the behavior of the last statement.

// Explanation: the last statement gives reference error as variable `first` was declared inside function which can't be accessed outside function.

// Q12) Find and explain the error:

function employee() {
    var salary = 30000;
}
employee();
console.log(salary); // RefErr


// Explanation: the last statement gives error as variable `salary` was declared inside function so it can't be accessed outside function.

// Q13) What will be the output?


var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test(); // 25
console.log(number); // 15


// Why doesn't the value printed inside the function change the global variable?

// Explanation: It follows the concept of function shadowing so it overrides the value assigned in global scope.

// Q14) Consider this code:


function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();


// Answer the following:

// - What is the output?

//     Answer: 50
// - Is a new local variable created each time the function is called?

//     Answer: Yes, a new local variable is created each time the function is called.
// - Does the local variable remain accessible after the function finishes executing?

//     Answer: it will be no more accessible once a function finishes executing.

// Q15) Write a function named `"calculateArea()"` that:

// - Declares a local variable `"length"` with the value `8`.
// - Declares a local variable `"width"` with the value `4`.
// - Calculates and prints the area of a rectangle.
// - Does not make either variable accessible outside the function.


function calculateArea(){
    var length = 8
    var width = 4
    var area = length*width
    console.log(area)
}
calculateArea()
