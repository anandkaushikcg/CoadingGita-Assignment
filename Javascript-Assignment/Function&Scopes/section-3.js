

// Q1) Create a function expression named showMotto that returns "Code. Learn. Grow.". Call it and print the output.


let showMotto = function(){
    return "Code. Learn. Grow."
}
console.log(showMotto())


// Q2) Write a function expression getSemester that returns the number 3. Print the value returned by the function.


let getSemester = function(){
    return "Semester: "+3
}
console.log(getSemester())


// Q3) Create a function expression and try to call it before writing the expression. What error do you get and why?


console.log(greet())
let greet = function(){
    return "Hey Guys!"
}


// Answer: It shows an error "Cannot access 'greet' before initialization", as unlike function declaration, function expressions are not hoisted.