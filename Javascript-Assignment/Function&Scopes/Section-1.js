

// Q1) Why do we use functions instead of writing the same code again and again? Explain with one simple example.

// Answer: We use `function` to avoid writing same code again and again. It allows us to write a block of code once and reuse it whenever needed.


console.log("Hello students!")
console.log("Hello students!")
console.log("Hello students!")
console.log("Hello students!")
// instead of this we can just use function and call it as needed

function greet(){
    console.log("Hello Students!")
}
greet()
greet()
greet()
greet()


// Q2) List any four advantages of functions and write one line for each advantage.

// Answer: 1. Code Reusability: Allows us to write code once and reuse multiple times.

// 2. Less Repetition: Avoid writing the same code again and again.

// 3. Easy to maintain: If we need a different output we can change the code once and all the outputs will be changed.

// 4. Better Organization: Makes code cleaner and easier to understand. Same code written repeatedly will make it messier.

// Q3) Imagine you have to display a welcome message at 6 different places in your program. How will a function help you here?

// Answer: Function let us write a code for welcome message once and reuse it 6 times instead of writing console six times.


function welcome(){
    console.log("Welcome to CG")
}
welcome()
welcome()
welcome()
welcome()
welcome()
welcome()


// Q4) Show the same code written twice without a function and once with a function.


// Without Function
console.log("Good Morning!")
console.log("Good Morning!")

// With Function
function greet(){
    console.log("Good Morning!")
}
greet()
greet()


// Q5) Give one real-life analogy that explains the idea of a function.

// Answer: Function is like a washing machine, while making of it it's cycle is defined once, then whenever we use it, it repeats the same process every time.

// Q6) Why do functions make debugging easier?

// Answer: Function helps in finding errors especially. If an error occurs we just have to check the code in function only. Not the whole code.