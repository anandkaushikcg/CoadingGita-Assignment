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

// Q2) Print the following right-triangle number pattern using nested for loops (without hard-coding any row):




for (let i=1; i<=4; i++){
    let string=""
    for (let j=1; j<=i; j++){
        string+=i+" "
    }
    console.log(string)
}


// Q3) Print the following right-triangle number pattern using nested for loops (without hard-coding any row):




for (let i=1; i<=4; i++){
    let string=""
    for (let j=1; j<=i; j++){
        string+=j+" "
    }
    console.log(string)
}


// Q4) Print the following pattern using nested for loops (without hard-coding any row):





for (let i=1; i<=4; i++){
    let string=""
    for (let j=1; j<=4; j++){
        if (i===1 || i===4){
            string+="* "
        }else{
            if (j===1 || j===4){
                string+="* "
            }else{
                string+="  "
            }
        }
    }
    console.log(string)
}


