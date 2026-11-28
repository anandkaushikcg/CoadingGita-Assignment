

// Q1) Create an array of 5 numbers. Use `pop()` twice and print the modified array and the two removed values.


const nums = [1, 2, 3, 4, 5];
let r1 = nums.pop()
let r2 = nums.pop()
console.log(nums)
console.log(r1)
console.log(r2)


// Q2) Create an array `["Red", "Blue", "Green"]`. Remove the last element using `pop()` and print both the array and the removed element.


const colors = ["Red", "Blue", "Green"];
let remov = colors.pop()
console.log(colors)
console.log(remov)


// Q3) Start with `[100, 200, 300, 400]`. Call `pop()` once and store the returned value in a variable. Print the variable and the array.


const num = [100, 200, 300, 400];
let removed = nums.pop();
console.log(removed)
console.log(num)


// Q4) What does `pop()` return?

// => pop() returns the removed element from the array.

// Q5) What happens if you call `pop()` on an empty array?

// => When you call `pop()` on an empty array it returns `undefined` and array will be as it is.