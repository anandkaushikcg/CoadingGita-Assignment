
// Q1) Write a function squareOfNumber(n) that returns the square of the given number. Call it with 9 and print the returned value.


function squareOfNumber(n){
    return n**2
}
let reS= squareOfNumber(9)
console.log(reS)


// Q2) Create a function isAdult(age) that returns true if age is 18 or above, otherwise returns false. Test it with 17 and 20.


function isAdult(age){
    return age>=18
}
console.log(isAdult(17))
console.log(isAdult(20))


// Q3) Write a function getFullName(firstName, lastName) that returns the full name. Call it with "Rohit" and "Sharma" and print the result.


function getFullName(firstName, lastName){
    return firstName+" "+lastName
}
let res = getFullName("Rohit","Sharma")
console.log(res)


// Q4) What does a function return if there is no return statement inside it?

// Answer: Function by itself returns undefined when there is no return statement inside it.

// Q5) Why do we use the return statement in a function instead of just using console.log() inside the function? Explain in 2–3 lines.

// Answer: We use return to send a value back from a function so that we can store it in a variable, reuse it or perform further operations on it. console.log() only displays the output on the screen.