// Predict the output:

let x = 10;
let y = x++;
let z = ++x;
console.log(x, y, z);//x=12,y=10,z=12.

// Predict the output:

let a = 5;
let b = a-- + ++a;
console.log(a, b);// a=5,b=10.

// Predict the output:

let m = 7;
let n = --m + m++;
console.log(m, n);// m=7,n=12;

// Predict the output:

let p = 3;
let q = p++ + ++p + p;
console.log(p, q);// p=5, q=13;

// Predict the output:

let val = 0;
val = val++ + ++val;
console.log(val);// 2
