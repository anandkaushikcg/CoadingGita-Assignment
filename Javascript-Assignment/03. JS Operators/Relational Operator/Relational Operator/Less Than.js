// A box can hold maximum 50 kg. Current weight is 42 kg. Check if more items can still be added.
let maxWeight = 50;
let currentWeight = 42;

console.log(currentWeight < maxWeight);

// Q2. Check if a Person Is Underage

let age = 16;
let minimumAge = 18;

console.log(age < minimumAge);

// Predict the Output
console.log(8 < 12);//true
console.log(20 < 10);//false
console.log(7 < 7);//false

// Predict the output
console.log("8" < 10);//True
console.log("20" < "3");//True
console.log("hello" < 5);//False

// What is the result of null < 0 and undefined < 0? Explain.

// console.log(null < 0); //null converts to 0, so 0 < 0 is false.
// console.log(undefined < 0); // - undefined converts to NaN, and comparisons involving NaN return false.


// A tank capacity is 500 litres. Current water level is 375 litres. Write a condition using < to check if it is not full.

let capacity = 500;
let waterLevel = 375;

console.log(waterLevel < capacity);

// Predict and Explain

console.log(false < true);//
// false < true → true, because false becomes 0 and true becomes 1
console.log("5" < "15");//"5" < "15" → false, because both are strings and are compared lexicographically, character by character.

console.log(NaN < 10);//NaN < 10 → false, because comparisons involving NaN return false







