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
