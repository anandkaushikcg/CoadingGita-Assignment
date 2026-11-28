

// Q1) Create a function declaration named displayCourse that returns "JavaScript Fundamentals". Call it and print the result.


function displayCourse(){
    return "JavaScript Fundamentals"
}
console.log(displayCourse())


// Q2) Write a function declaration getStudentStatus that returns the string "Active Learner". Store the returned value in a variable and print it.


function getStudentStatus(){
    return "Active Learner"
}
let response = getStudentStatus()
console.log(response)


// Q3) Write a function declaration and call it before its definition. What happens and why? Explain briefly.


greet()
function greet(){
    console.log("Hello World!")
}


// Explanation: As function declarations are hoisted, so it gives the output even before it's declaration.