

// Q1) Write a while loop to print numbers from 1 to 10.

let i = 1;
while (i<=10){
    console.log(i)
    i++
}


// Q2) Write a while loop to calculate the sum of the first 10 natural numbers.


let i = 1;
let sum = 0
while (i<=10){
    sum+=i
    i++
}
console.log(sum)


// Q3) Write a while loop to print the multiplication table of a given number from 1 to 10.


let i = 1;
const num = 5
while (i<=10){
    console.log(num,"x",i,"=",num*i)
    i++
}


// Q4) Write a while loop to count the total number of digits in a given positive integer.

let num = 58321
let count = 0
while (num>0){
    count+=1
    num=Math.floor(num/10)
}
console.log(count)


// Q5) Write a while loop to reverse the digits of a given positive integer.


let num = 58321
let reverse = 0
while (num>0){
    digit=num%10
    reverse=reverse*10+digit
    num=Math.floor(num/10)
}
console.log(reverse)


// Q6) Write a while loop to calculate the sum of all digits of a given number.


let num = 58321
let sum = 0
while (num>0){
    digit=num%10
    sum+=digit
    num=Math.floor(num/10)
}
console.log(sum)
