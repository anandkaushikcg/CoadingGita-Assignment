

// Q1) You need to calculate the total marks of three subjects for 4 different students. Write a function getTotal(m1, m2, m3) and call it four times with different marks instead of repeating the addition code.


function getTotal(m1, m2, m3){
    let total = m1+m2+m3
    return total
}
console.log("Student1:",getTotal(89,96,86))
console.log("Student2:",getTotal(85,76,76))
console.log("Student3:",getTotal(39,94,85))
console.log("Student4:",getTotal(69,56,100))


// Q2) Create a function calculateSimpleInterest(principal, rate, time) that returns the simple interest. Use the function to find interest for two different sets of values.

function calculateSimpleInterest(principal, rate, time){
    let interest = (principal*rate*time)/100
    return interest
}
console.log(calculateSimpleInterest(10000,8,10))
console.log(calculateSimpleInterest(3500000,10,5))


// Q3) Without using a function, write code to find the average of three numbers twice (for two students). Then rewrite the same logic using a single function findAverage(a, b, c) and call it twice.


// Without Function
let m1=89, m2=89, m3=89;
let avg1 = (m1+m2+m3)/3;
console.log("Student 1 avg:",avg1)

let m6=86, m4=88, m5=59;
let avg2 = (m6+m4+m5)/3;
console.log("Student 2 avg:",avg2.toFixed(2))

// With Function
function findAverage(a, b, c){
    let avg = (a+b+c)/3
    return avg.toFixed(2)
}
console.log("Student 1 average:",findAverage(86,68,79))
console.log("Student 2 average:",findAverage(86,86,97))


// Q4) How do functions help in reducing code repetition? Explain with one real-world example.

// Answer: Function help reduce code repetition by allowing us to write a block of code once and reuse it multiple times by simply calling it.

// Real world example: let's consider we are making a result in which we give total and no. of subjects to find average.


function result(Total, noOfSubjects){
    return (Total/noOfSubjects).toFixed(2)
}
console.log(result(239,3))
console.log(result(543,6))


// Q5) Mention any three advantages of using functions in a program.

// Answer: 1. Reusability

// 2. Cleaner code

// 3. Easier debugging