// Q1) Print all numbers from 1 to 30, but skip every number that is divisible by 4 using continue.


for (let i=1; i<=30; i++){
    if (i%4==0){
        continue
    }
    console.log(i)
}


// Q2) Given an array of mixed positive and negative numbers, use a for loop with continue to calculate the sum of only the positive numbers.


let arr = [-3, 53, -12, 23, 21, -123]
let sum=0
for (let i=1; i<arr.length; i++){
    if (arr[i]<0){
        continue
    }
    sum+=arr[i]
}
console.log(sum)


// Q3) Write a for loop that prints every character of the string "Hello World", but skips all spaces using continue.


let string = "Hello World"
for (let i=1; i<string.length; i++){
    if (string[i]==" "){
        continue
    }
    console.log(string[i])
}


// Q4) Print the multiplication table of 6 from 1 to 12, but skip the rows where the product is divisible by 5 (use continue).


for (let i=1; i<=12; i++){
    let num = 6*i
    if (num%5==0){
        continue
    }
    console.log(num)
}


// Q5) Given an array of ages [12, 18, 25, 15, 30, 17, 22], use a for loop with continue to print only the ages of people who are eligible to vote (age ≥ 18).


let ages=[12, 18, 25, 15, 30, 17, 22]
for (let i=1; i<ages.length; i++){
    if (ages[i]<18){
        continue
    }
    console.log(ages[i])
}
