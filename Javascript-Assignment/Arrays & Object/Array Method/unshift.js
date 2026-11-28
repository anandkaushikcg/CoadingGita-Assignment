

// Q1) Start with `["CSS", "JavaScript"]`. Use `unshift()` to add `"HTML"` at the beginning and print the array.


const lang = ["CSS", "JavaScript"];
lang.unshift("HTML")
console.log(lang)


// Q2) Create an array `[20, 30]`. Add 5 and 10 at the beginning using `unshift()` and print the result.


const nums = [20, 30];
nums.unshift(5, 10)
console.log(nums)


// Q3) Create an empty array. Use `unshift()` to add three city names one by one and print the final array.


const cities = [];
cities.unshift("Ahmedabad")
cities.unshift("Delhi")
cities.unshift("Varansi")
console.log(cities)


// Q4) Where does `unshift()` add the new element(s)?

// => `unshift()` adds the new elements at the start of an array.

// Q5) Can `unshift()` add more than one element at the same time? Give a short explanation.

// => Yes, `unshift()` adds more than one element at the same time.