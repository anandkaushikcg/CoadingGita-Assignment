
// Q21) Predict the complete output:


for (var number = 2; number <= 6; number += 2) {
    console.log(number); // 2 4 6
}
console.log("Final:", number); // Final: 8


// Explain why `"number"` can be accessed after the loop.

// Explanation: As number is a function scoped declaration so it ignores block of `for` loop.

// Q22) What will be printed?


var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count); // Count: 4


// Explain what happens to the original value of `"count"`.

// Explanation: As `var` allows redeclaration, so original value of count is redeclared when `for` loop starts executing.

// Q23) Predict the output:


var i = 5;
while (i > 2) {
    console.log(i); // 5 4 3
    i--;
}
console.log("After loop:", i); // After loop: 2


// Is `"i"` accessible after the loop? Why?

// Yes, `i` is accessible after the loop.

// Q24) Find the error, if any:


for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);


// Does the final statement cause an error? What value does `"item"` contain?

// No, the final statement doesn't cause an error. `item` contains value 4 at the end.

// Q25) Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.


for (var step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);


// Corrected code

for (let step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);

// Explain the difference between your solution and the original code.

// Explanation: my code declares the variable `step` using let which make it unaccessible outside scope of for loop but the original code contains var instead of let which is a functional scope so it make variable accessible outside.