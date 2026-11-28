

// Q41) Predict the output and explain the lookup process:


var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year); // 2025
        console.log(dept); // CSE
        console.log(institute); // CodingGita
    }
    batch();
}
department();


// Explanation: When a variable is used, JavaScript first searches in the current function. If it cannot find the variable, it moves to the outer function, continuing until it reaches the global scope.

// Q42) What will happen when this code runs? Explain using the scope chain.


var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar); // RefErr
    }
    inner();
}
outer();


// Explanation: Due to the scope chain property, function tries to reach all the variable starting from inside the function till the global scope. But here innerVar is not declared so JS gives Reference error.

// Q43) Identify which variables are accessible inside `deep()` and which are not:


var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();


// => All the variables can be accessed inside `deep()`

// Q44) Predict the output:


var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x); // first
    }
    second();
}
first();
console.log(x); // global


// Explain why the value of `x` changes depending on the location of `console.log`.

// Explanation: Due to the property of scope chain function tries to find nearest variable declaration from inside the function till global scope. So when `console.log(x)` is inside function, it's nearest declaration is `x=first` but outside function only `x=global` is accessible.

// Q45) Write a nested function structure (at least 3 levels) that prints:

// - A variable from the innermost function
// - A variable from the middle function
// - A variable from the outermost function / global scope  
// Demonstrate the scope chain clearly.


var x = 43;
function func1(){
    var y = 53;
    function func2(){
        var z = 32;
        console.log(x, y, z)
    }
    func2()
}
func1()
