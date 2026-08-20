// Variables can be declared with let, const, or var
let name = "John";        // string
const age = 25;           // number
var city = "New York";    // older way (avoid)

// Basic data types
let greeting = "Hello";   // string
let count = 10;           // number
let isActive = true;      // boolean
let data = null;          // null (no value)
let result;               // undefined (declared but not assigned)

// Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);   // "apple"

// Objects
let person = {
  name: "Alice",
  age: 30,
  city: "Boston"
};
console.log(person.name); // "Alice"
console.log(person["age"]); // 30
console.log(person.city); // "Boston"