

// Q1) Write a function declaration subtract(a, b) that returns the difference of two numbers. Call it with arguments 50 and 18 and print the result.


function subtract(a, b){
    return a-b
}
let res = subtract(50,18)
console.log(res)


// Q2) Create a function expression greetUser(name) that returns "Welcome, " + name + "!". Call it with the argument "Aarav".


let greetUser = function(name){
    return "Welcome, " + name + "!"
}
let reS = greetUser("Aarav")
console.log(reS)


// Q3) Write a function calculateArea(length, breadth) that returns the area of a rectangle. Call it twice with different pairs of arguments: (12, 5) and (8, 9).


function calculateArea(length, breadth){
    let area = length*breadth
    return area
}
let result = calculateArea(12, 5)
console.log(result)

console.log(calculateArea(8, 9))


// Q4) What is the difference between a parameter and an argument? Explain with a short example.

// Answer: Parameter- Is a variable defined in function definition which recives a value.

// Argument- Is the actual value passed to a function when calling it.

// Q5) Can a function have parameters but be called without arguments? What happens in that case? Explain briefly.

// Answer: Yes, a function can have parameters but be called without arguments. In that case, the parameters get the value undefined by default (if no default value is provided)