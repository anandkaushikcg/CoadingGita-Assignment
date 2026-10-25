// Q1) Print the following right-triangle number pattern using nested for loops (without hard-coding any row):




num = 1
for (let i=1; i<=4; i++){
    let string=""
    for (let j=1; j<=i; j++){
        string+=num+" "
        num++
    }
    console.log(string)
}

