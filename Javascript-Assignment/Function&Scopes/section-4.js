

// Q1) Write a function declaration greetStudent that returns "All the best for your coding journey!". Call this function four times.


function greetStudent(){
    return "All the best for your coding journey!"
}
console.log(greetStudent())
console.log(greetStudent())
console.log(greetStudent())
console.log(greetStudent())


// Q2) Create a function expression todayFocus that returns "Focus on functions today". Store the result in a variable and print that variable.


let todayFocus = function(){
    return "Focus on functions today"
}
let res = todayFocus()
console.log(res)


// Q3) Write one function declaration and one function expression. Call each of them twice and print all four results.


function institute(){
    console.log("We are CodinGita!")
}

let course = function(){
    console.log("B.Tec CSE (Ai)")
}

institute()
institute()
course()
course()
