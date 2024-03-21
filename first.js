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

// Js Data Types 

// Two Type of Data Type :- 1. Prmitive Data 2.Object Type Data/Refarence Data 


// 1. Primitive Data Types Describe 

const numberType = 455;
const stringType = 'Ahlan Sahlan Mahe Ramadan- 2024';
const booleanType = true;
let undifinedType;
const nullType = null;

console.log('This is Number TYpe Data:-',numberType);
console.log('This is StringType Data :-',stringType);
console.log('This is Boolean Type Data :-',booleanType);
console.log('This is Undifined TYpe Data:-',undifinedType);
console.log('This is Null Type Data:-',nullType);

// Object TYpe Data :- 
// 1.Arrauy 

const fruitsList = ['Appple', ' Orange', 'Peyara', ];
console.log(fruitsList);

// 2. Object TYpe Data ;

const phoneInfo = {
    name : 'viv0 Y2',
    brand : 'vivo Company',
    price : '12K',
    Ram : '32GB',
    specialDesign: 'Gray & Black',
    othersModel : ['Mi10', 'Sawani', 'Oppo']
}

console.log(phoneInfo)

// 3. function type data 

function add(){
    console.log('new fucntion Call')
}
add();

const myFunc = function (a,b){
    console.log('This function Value Is :',a + b);
}

myFunc(2,2);



const parent = document.getElementById('parent');
const child = document.getElementById('child');
const btn = document.getElementById('btn');
const body = document.querySelector('body');

const parentClickHandler = () => {
    console.log('Parent IS Clicked')
}

const childClickHandler = () => {
    console.log('Child Is Clicked')
}

const btnClickHandler = () => {
    console.log('Btn is Clicked')
}

const bodyClickHandler = () => {
    console.log('Body is Clicked')
}

parent.addEventListener('click', parentClickHandler);
child.addEventListener('click', childClickHandler);
btn.addEventListener('click', btnClickHandler);
body.addEventListener('click', bodyClickHandler);

