

// Q46) Predict the output:


var score = 50;
function test() {
    var score = 90;
    console.log(score); // 90
}
test();
console.log(score); // 50


// Explain what “shadowing” means in this example.

// Explanation: when a variable is declared twice, inside and outside the function. The function gives the output according to variable declaration inside function.

// Q47) What will be printed?

var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name); // Local Name
}
show();
console.log(name); // Global Name


// Does the local variable permanently change the global one? Why or why not?

// => No the local variable can only be accessed inside the function so it can't change the global one permanently. The variable will only be changed for that function particularly.

// Q48) Find the output and explain:


var value = 10;
function update() {
    value = 20;
    console.log(value); // 20
}
update();
console.log(value); // 20


// Compare this with the previous questions (where `var` was used inside the function).

// => As `var` is not used here the variable will be reassigned. So reassignment carries forward its value.

// Q49) Predict the complete output:


var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color); // Inside: Red
}
changeColor();
console.log("Outside:", color); // Outside: Blue


// Q50) Write a program that demonstrates variable shadowing:

// - Declare a global variable `marks = 70`.
// - Inside a function, declare another variable `marks = 95`.
// - Print both values (inside and outside the function) so the difference is clear.


var marks = 70;
function myFunc(){
    var marks = 95;
    console.log(marks)
}
myFunc()
console.log(marks)
