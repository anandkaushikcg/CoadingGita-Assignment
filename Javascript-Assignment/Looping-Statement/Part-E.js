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


// Q5) Print the following right-triangle number pattern using nested for loops (without hard-coding any row):





for (let i=1; i<=6; i++){
    let string=""
    for (let j=1; j<=i; j++){
        if (i%2==1){
            string+="#"+" "
        }else{
            string+="$"+" "
        }
    }
    console.log(string)
}


// Q6) Print the following right-angled alphabet pattern using nested for loop (without hard-coding any row)




for (let i=1; i<=5; i++){
    let string=""
    for (let j=1; j<=i; j++){
        string+=String.fromCodePoint(64+j)+" "
    }
    console.log(string)
}


// Q7) Print this hollow right-triangle star pattern using nested loops:




for (let i=1; i<=5; i++){
    let string=""
    for (let j=1;j<=i; j++){
        if (j==1 || j==i || i==5){
            string+="* "
        }else {
            string+="  "
        }
    }
    console.log(string)
}


// Q8) Print the following reverse right-angle star pattern using nested for loops:





for (let i=5; i>=1; i--){
    let string=""
    for (let j=1; j<=i; j++){
        string+="*"
    }
    console.log(string)
}


// Q9) Print the following reverse right angle pattern where each row contains the row number repeated, using nested for loops:




for (let i=5; i>=1; i--){
    string=""
    for (let j=1; j<=i; j++){
        string+=i+" "
    }
    console.log(string)
}



