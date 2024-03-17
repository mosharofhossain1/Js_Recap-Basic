console.log('Romadan Mubarok');

// Declear  Varibale Category

var x = 23;
x = 50;
console.log('This Value is ReAssign :', x)

let a = 34;
a = 12;
console.log('This is Value is ReAssign :', a)

const b = 56;
// b = 78; const variable reassign not supported
console.log('Const Varible Value Reassign Not Supported', b);



// Js OPerator 

// 1. Assignment OPerator :- =, +=, -=, /=, *=, **=

let num1 = 34;
let num2 = 10;
num2 = 20;
num2 += 12;
num2 -= 2;
num2 /= 5;
num2 *= 2;
num2 **= 2;
console.log(num2)

// 2. Arathmatice OPerator:-   +, -, *, /, %, **

const A = 5;
const B = 2
let r =  A + B;
r = A - B;
r = A * B;
r = A / B;
r = A % B;
r = A ** B;

console.log(r);

// 3. Comparative OPerator :- ==, ===, !=, !==, >, <, >=, <=, 

let number1 = 23;
let number2 = 40;

console.log(number1 == number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

// 4. Logical OPerators:-  &&, ||, !

console.log(number1 === number2 && number1 > number2);
console.log(number1 !== number2 || number1 > number2);
console.log(number1 === number2 ||( number1 < number2 && number1 % 2 === 0 ))