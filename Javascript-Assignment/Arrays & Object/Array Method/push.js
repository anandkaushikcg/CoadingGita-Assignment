// Q1) Create an array of 3 colors. Use `push()` to add two more colors and print the final array.


const colors = ["Red", "Green", "Blue"]
colors.push("Violet", "Yellow")
console.log(colors)


// Q2) Start with an empty array. Use `push()` three times to add the numbers 5, 10 and 15. Print the array.


const arr = [];
arr.push(5)
arr.push(10)
arr.push(15)
console.log(arr)

// Q3) Create an array `["Pen", "Book"]`. Add `"Eraser"` and `"Scale"` using a single `push()` call and print the result.


const stationary = ["Pen", "Book"];
stationary.push("Eraser", "Scale")
console.log(stationary)

// Q4) Where does `push()` add the new element(s) in the array?

// => `push()` adds the new elements at the end of an array.

// Q5) Does `push()` change the original array? Explain in one sentence.

// => Yes, `push()` directly modifies the original array by adding elements at the end of that array.