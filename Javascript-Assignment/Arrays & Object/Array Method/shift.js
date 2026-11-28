

// Q1) Create an array of 4 city names. Remove the first city using `shift()` and print the remaining array and the removed city.


const cities = ["Goa", "Tokyo", "Ooty", "Kanpur"];
let removed = cities.shift();
console.log(cities)
console.log(removed)


// Q2) Create `[10, 20, 30, 40]`. Call `shift()` twice and print the final array and both removed values.


const nums = [10, 20, 30, 40];
let r1 = nums.shift()
let r2 = nums.shift()
console.log(nums)
console.log(r1)
console.log(r2)


// Q3) Start with `["Apple", "Banana", "Mango"]`. Remove the first element and store it in a variable. Print the variable and the array.


const fruits = ["Apple", "Banana", "Mango"];
let remov = fruits.shift()
console.log(fruits)
console.log(remov)


// Q4) How is `shift()` different from `pop()`?

// => `shift()` removes the element from the start of an array while `pop()` removes the element from the end of an array.

// Q5) What does `shift()` return?

// => `shift()` returns the removed value from an array.