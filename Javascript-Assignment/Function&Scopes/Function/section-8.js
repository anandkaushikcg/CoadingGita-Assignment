

// Q1) Create a function showCity that declares a local variable city = "Ahmedabad" and prints it. After calling the function, try to print city outside and note what happens.


function showCity(){
    let city = "Ahmedabad"
    console.log(city)
}
showCity()
console.log(city)


// => It gives reference error as variables declared to any function are local to that function

// Q2) Declare a global variable trainer = "CodingGita Mentor". Write a function displayTrainer that prints this global variable. Call the function and also print the variable outside the function.


let trainer = "CodingGita Mentor"
function displayTrainer(){
    console.log(trainer)
}
displayTrainer()
console.log(trainer)


// => As global variables are accessible to anywhere it doesn't gives an error

// Q3) Write a function demoScope that contains a local variable value = 50. Print the variable inside the function. Then try accessing the same variable outside and explain the output/error.


function demoScope(){
    let value = 50
    console.log(value)
}
demoScope()
console.log(value)


// => it gives ReferenceError as variables declared in a function are local to that function only and can't be accessed outside it.

// Q4) A variable declared inside a function cannot be used outside. Why does JavaScript follow this rule? How does it help in writing better programs?

// Answer: JS follows this rule because of scope, which controls where a variable can be accessed. It helps in writing better programs as other parts of code can't modify the value of a variable declared inside a function and different functions can use same variable with different values as needed.

// Q5) What will happen if a global variable and a local variable have the same name? Which one will the function use? Explain briefly

// Answer: If a global variable and a local variable have the same name the function will use the local variable as it has the priority.