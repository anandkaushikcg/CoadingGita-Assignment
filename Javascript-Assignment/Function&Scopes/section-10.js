

// Q1) Write a function mainTask that contains an inner function helperTask. The inner function should return "Task completed successfully". Call the inner function from mainTask and return its result.


function mainTask(){
    function helperTask(){
        return "Task completed successfully"
    }
    return helperTask()
}
let res = mainTask()
console.log(res)


// Q2) Create a function calculateFinal(m1, m2) that has an inner function getTotal to add the marks. Use the inner function and return a message: "Final marks = " followed by the total.


function calculateFinal(m1, m2){
    function getTotal(){
        return m1+m2
    }
    return "Final Marks = "+getTotal()
}
console.log(calculateFinal(54,87))


// Q3) Write a function studentStatus(name, marks) containing an inner function getGrade. The inner function returns "A" if marks ≥ 80, "B" if marks ≥ 60, otherwise "C". Return a final sentence using the name and grade.


function studentStatus(name, marks){
    function getGrade(){
        return marks>=80 ? "A" : marks>=60 ? "B" : "C"
    }
    return name+" got marks "+marks+" and grade "+getGrade()
}
console.log(studentStatus("Warner",98))


// Q4) What is the main advantage of writing a function inside another function? When should we use nested functions?

// Answer: The main advantage of using nested function is better organization and scope control. It is used when a small task is needed only by one outer function and we want to avoid repetition of related logic.

// Q5) Can an inner function access variables of the outer function? What about the reverse (outer accessing inner variables)? Explain.

// Answer: An inner function may access variable declared in outer function as they are like global scope variable for inner one but an outer function can't access the variables declared inside the inner function due to property of function scope.