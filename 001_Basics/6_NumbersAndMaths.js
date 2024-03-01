// +++++++++++++++++ Numbers +++++++++++++++++ //

let balance = new Number(100);
// console.log(balance) // It prints like -( [Number: 100] )-

// console.log(String(balance).length)
// console.log(balance.toString().length) // These are the 2 methods to convert any Num to Str
//// by converting the Num to Str we can easly perform any Str operation on it

let score = 423;
// console.log(score.toFixed(2)) // It returns the value with fixed len of decimals
// console.log(score.toPrecision(3)) // It roundOff the num

let thousands = 10000000;
// console.log(thousands.toLocaleString('en-IN')) // It Converts the Num into to normal use format
//// -( 'en-IN' )- is IMP to represent the Num as per the Indian format

// ++++++++++++++++++ MATH ++++++++++++++++++ //

// -( random() )- this func always gives value between 0 to 1
console.log(Math.random());

// If we want the values from any specific range use the below formula

let min = 1;
let max = 5;

let ourRange = Math.floor(Math.random() * (max - min + 1) + min) // <- IMP
console.log(ourRange)