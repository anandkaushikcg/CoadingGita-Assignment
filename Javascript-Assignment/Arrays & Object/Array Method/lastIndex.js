

// Q1) Create an array where one element is repeated 3 times. Use `lastIndexOf()` to find the last occurrence of that element.


const num = [23, 43, 23, 53, 32, 23, 34]
console.log(num.lastIndexOf(23))


// Q2) Create `["X", "Y", "Z", "Y", "X"]`. Print the last index of `"Y"` and `"X"`.


let arr = ["X", "Y", "Z", "Y", "X"];
console.log(arr.lastIndexOf("X"))
console.log(arr.lastIndexOf("Y"))


// Q3) Create an array of 5 numbers with one number repeated. Find its last index using `lastIndexOf()`.


const nums = [3, 5, 3, 6, 9];
console.log(nums.lastIndexOf(3))


// Q4) How is `lastIndexOf()` different from `indexOf()`?

// => `lastIndexOf()` gives the index of last appearance of the element in array while `indexOf()` gives the index of first appearance of the element in array.

// Q5) When would you prefer `lastIndexOf()` over `indexOf()`?

// => When I want to access the last index of appearance of a repeating element of an array, I would prefer `lastIndexOf()` over `indexOf()`