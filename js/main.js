// console.log is like print statement in Python
console.log('Hello World from main.js');
console.log('Hello again');

// Basics of JavaScript

/*
    Multiline Comment in JavaScripts
    -- Variable Declaration is JS --
    Primitive Data Types: String, Number, Boolean, undefined, Null
    Object Data Types: Object, Array, Function

    Control Flow
*/

// Variable declaration 3 ways to do so
// Python: name = 'Ibsy'

// var myName; <-- camelcase, first word then first letter capital

// console.log(myName) // We get undefined

// PRIMITIVE DATA TYPES
// String Declaration
var myName = 'Brian';
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``. The tick marks (``) have a special
// behavior to format the string
// Tick marks + ${varName} is equivalent to f"{var_name}" in Python
console.log('My name is ${myName}');
console.log("My name is ${myName}");
console.log(`My name is ${myName}`);

// Integer
var myAge = 100;
console.log(myAge);
console.log(typeof myAge); // number

// Float
var pi = 3.14; 
console.log(pi);
console.log(typeof pi); // still considered a number

// Boolean
var boolTrue = true; // lowercase
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);

// undefined -- variable assigned but given no value
var something;
console.log(something);
console.log(typeof something);

// Null -- value is nothingness
var someNull = null;
console.log(someNull)
console.log(typeof someNull) // returns 'object' this is considered a bug, but on which cannot be fixed


// OBJECT DATA TYPES
// Object -- works similarly to a dict in Python
var myObject = {
    a: 123,
    test: 'Hello!'
}
console.log(myObject)
console.log(typeof myObject)

// Array -- like a list in Python
var myArr = ['Brian', 'Chicago', 'Coding Temple']
console.log(myArr)
console.log(typeof myArr)

/* gives index numbers for each item in the Array
    0: "Brian"
    1: "Chicago"
    2: "Coding Temple"
    length: 3
    [[Prototype]]: Array(0)
*/


// Function -- blocks are separated by curly brackets
function abc(){} // equilivant to using pass in python
console.log(abc)
console.log(typeof abc)


// Accessing Properties in Objects
var person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'Javascript']
}
console.log(person)
person.first = 'Frank' // replaced 'Brian' with 'Frank'
console.log(person)

// Bracket Notation
console.log(`My first name is ${person['first']}`) 

// Dot Notation
console.log(`My last name is ${person.last}`)


// Accessing values in an Array
// dot notation with a number does not work
var newArr = [2, 4, 6, 8, 10]

console.log(newArr[2]) // returns the 6
// console.log(newArr.2) // this does not work

//Array also have a length property automatically added
console.log(newArr.length) // returns 5

var mixedArr = [1, 'Hello', {a: 123, b:321}, [1,2,3], function abc(){}]
console.log(mixedArr)

/* Returns
    (5) [1, 'Hello', {…}, Array(3), ƒ]
    0: 1
    1: "Hello"
    2: {a: 123, b: 321}
    3: (3) [1, 2, 3]
    4: ƒ abc()
    length: 5
    [[Prototype]]: Array(0)
*/

console.log(mixedArr[2].a) // returns 123 Dot Notation
console.log(mixedArr[2]['a']) // returns 123 Bracket Notation


// 'var' defines local variables

console.clear() // it will clear the console instead of commenting everything above out

// let - Allows us to declare a variable similar as var *let is block-scoped, var is global-scoped
let myCity = 'Chicago'
console.log(myCity)

// Create a block with {}
if (true){
    var myState = 'Illinois' // Declare global variable myState
    let color = 'blue' // Declare block variable color
    let myCity = 'Springfield' // Declare block variable myCity
    console.log(myCity, myState, color) // returns Springfield Illinois blue
    // color and 'Springfield' is only scoped in this block
}

console.log(myCity, myState);


// const - similar to let (block-scoped) - 2 main diff: 1. Needs a value when declared 2. Cannot be reassigned
const newVariable = 'something' // has to have a value assigned
console.log(newVariable)

// cannot change a const variable
// newVariable = 'another thing' // main.js:144 Uncaught TypeError: Assignment to constant variable


const myBirthday = true
let ageOfPerson = 40

if(myBirthday){
    const favColor = 'Green'
    ageOfPerson = ageOfPerson + 1 // Okay because ageOfPerson was declared with *let*
    // myBirthday = false // Error because myBirthday was declared with *const*
    console.log(ageOfPerson)
    console.log(favColor)
}

// console.log(favColor) // this causes an error because const is block-scoped




// const has tricks to be aware of
const cities = ['Chicago', 'New York','Denver', 'San Diego']

console.log(cities)

cities[1] = 'San Francisco'
console.log(cities) // changed 'New York' to 'San Francisco'
// Even though a const can't be altered the content within it can since cities is an object

// cannot change the object completely
// cities = ['Austin', 'Portland'] // Uncaught TypeError: Assignment to constant variable.


const newPerson = {
    first: 'Abraham',
    last: 'Lincoln'
}

console.log(newPerson)
newPerson.first = 'Abe'
console.log(newPerson)


// Uncaught SyntaxError: Identifier 'newPerson' has already been declared (at main.js:206:7)
// const newPerson = {
//     first: 'George',
//     last: 'Washington'
// }

// for the most part use *let* for variable declarations, if you need to go outside of the
// scope use *var* (var is always gonna be around), only use const for the primitive types

// let myname;

// if (true){
//     myname = 'dfjkjsldf'
// }

// Clear the console for the next topid
console.clear()

/*
    Basic Math Operations
*/ 

// Addition
let sum = 5 + 5
console.log(sum)
sum += 5 // sum = sum + 5
console.log(sum)
sum++ // sum = sum + 1 // sum += 1
console.log(sum)


// Subtraction
let diff = 10 - 5
console.log(diff)
diff -= 3
console.log(diff)
diff-- 
console.log(diff)


// Multiplication
let prod = 4 * 5
console.log(prod)
prod *= 2
console.log(prod)
// prod** // there is no **
console.log(prod)


// Division
let quotient = 40 / 5
console.log(quotient)
quotient /= 2
console.log(quotient)


// Exponents
let square = 5 ** 2
console.log(square)
square **= 2 // square = square ** 2
console.log(square)


// Modulo
let remainder = 19 % 4
console.log(remainder)
remainder %= 2 // remainder = remainder % 2
console.log(remainder)


// Floor Division - builtin operator - user builtin Math module
// console.log(Math) // you do not have to import it
let floor = Math.floor(19/4) // divided those numbers then does floor division to round down 
console.log(floor)


// CONVERSION
/*
in javascript, the + operator performs typecasting to string if either of the 
operands is not a number, while the - operator always casts to number.

This means + operator will try String firstly if one of them is String. 
Otherwise, it will apply number addition by converting them into number.
*/
// + operator with a number and string
let myString = 'My age is '
let myNewAge = 55

let addedString = myString + myNewAge
// console.log(myString + myNewAge) also works
console.log(addedString) // Returns: My age is 55
console.log(typeof addedString) // string


console.log(square) // 625
// when converting it prefers strings
let quizOne = square + '4'
console.log(quizOne) // result 6254

let answer = square + Number('4')
console.log(answer)

let quizTwo = square - '4'
console.log(quizTwo) // returns 621


console.clear()

// JavaScript Comparisons

console.log(5 == 5) // true
console.log(5 == 5.0) // true
console.log(5 == '5') // true, still does type conversion
console.log(5 === '5') // false because == checks for equality while allowing for type conversion
// === checks for equality but does not allow for type conversion

console.log(1 == true) // true

console.log('10' < 5) // false, 10 is not less than 5 

// Be Careful with type conversions
console.log('10' > '9') // false, both of these are strings, they do not need to be converted
// compares them alphabetically 1 0 comes before 9


// when JavaScript compares objects, it looks for REFERENCE ONLY!!!
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]

console.log(arr1 == arr2) // false
console.log(arr1 === arr2) // false

let animals = ['cat', 'bird', 'dog']
let newerArr = animals // reference, where it lives in memory // like a Python id

console.log(animals == newerArr) // true, because they are the same array
console.log(animals == ['cat', 'bird', 'dog']) // false
console.log(newerArr == ['cat', 'bird', 'dog']) // false


animals.push('horse') // push is like 'append' to a list
console.log(newerArr) // newerArr has 'horse' in it because newerArr is an instance of animals


// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal but yes conversion (!=), Not Eqaul no conversion (!==)
console.log(5 != '5') // false
console.log(5 !== '5') // true

console.clear()