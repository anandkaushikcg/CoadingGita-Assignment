// Minimum marks required for distinction is 75. A student scored 75. Check if the student gets distinction.



let speedLimit = 60
let vehicleSpeed = 60
console.log("Is vehicle driving in limit:", vehicleSpeed <= speedLimit)


// Q2) A student needs at least 40 marks to pass. He scored 39. Check if he has failed.


let passingMarks = 40;
let score = 39;
console.log("Is student failed:",score <= passingMarks)


// Q3) Predict the output:


console.log(15 <= 20); // Output: true
console.log(20 <= 15); // Output: false
console.log(15 <= 15); // Output: true


// Q4) Predict the output:


console.log("15" <= 20); // Output: true
console.log("30" <= "5"); // Output: true
console.log(null <= 0); // Output: true


// Q5) What is the result of `undefined <= 0`? Explain.

// Output: false => undefined will be converted to NaN which gives false on comparing with anything.

// Q6) A bag can hold maximum 10 books. Currently it has 10 books. Write a condition using `<=` to check if more books can be added.


let maxCapacity = 10;
let current = 10;
console.log("Is bag full:", current <= maxCapacity)


// Q7) Predict and explain:


console.log(false <= 0); // Output: true => false converted to number is 0 so 0<=0
console.log("" <= 0); // Output: true => value of empty string in number is 0 so 0<=0
console.log(NaN <= 5); // Output: false => Comparing NaN with anything will give false