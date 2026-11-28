

// Q1) Write a function generateMessage(name, score) that calculates whether the student has passed (score ≥ 40) and returns a complete sentence like: "Aarav has scored 65 and the result is Pass".


function generateMessage(name, score){
    if (score>=40){
        return name+" has scored "+score+" and the result is Pass."
    }else{
        return name+" has scored "+score+" and the result is Fail."
    }
}
let res = generateMessage("Dhruv",98)
console.log(res)


// Q2) Create a function billCalculator(item1, item2, item3) that returns the total amount and also mentions if the customer gets a discount (total ≥ 1000 → "Discount Applied", otherwise "No Discount").


function billCalculator(item1, item2, item3){
    let total = item1+item2+item3
    if (total>=1000){
        return "Bill Amount is "+total+" Discount Applied."
    }else{
        return "Bill Amount is "+total+" No Discount."
    }
}
// let res = billCalculator(563,234,342)
// console.log(res)


// Q3) Write a function performanceReport(student, m1, m2, m3) that calculates total and average, then returns a formatted string containing name, total, average and a remark ("Excellent" if average ≥ 80, otherwise "Keep Improving").


function performanceReport(student, m1, m2, m3){
    let total = m1+m2+m3
    let avg = total/3
    let remark = avg>=80 ? "Excellent" : "Keep Improving"
    return `${student} got total ${total} marks making an average ${avg}. ${remark}`
}
// let res = performanceReport("Quinny",76,78,89)
// console.log(res)


// Q4) Why is it better to perform multiple related tasks (calculation + decision + message) inside one function instead of writing separate pieces of code?

// Answer: Performing multiple related tasks inside one function facilitates us to reuse same code by writing a single line for it and it keep the code clean and easy to understand. Writing separate pieces of code make it messier.

// Q5) How does combining concepts like parameters, return and conditions inside a single function improve code quality?

// Answer: Combining parameters, return statements and conditions inside a single function makes a code more reusable, organized and efficient. Parameters allow the function to accept conditions help make decisions and return provide result.