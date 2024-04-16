"use strict";
// Equality and Inequality Test 1
console.log("Equality test with strings:", "Apple" === "Apple");
// Equality and inequality test 2
console.log("inequality test with strings:", "Apple" != "orange");
// test usingthe lower case function
console.log("Lowercase function test:", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality and inequality
console.log("Equality test with numbers:", 26 === 26);
console.log("inequality test with numbers:", 26 != 35);
// greater than and less than
console.log("Greater than test:", 10 > 5);
console.log("Less than test:", 10 < 5);
// greater than and equal to 
console.log("Greater than and Equal to test:", 10 >= 10);
// less than or equal to
console.log("Less than or equal to test:", 5 <= 10);
// tests using "and" and "or" operator
console.log("And operator test:", 5 === 5 && 10 > 5);
console.log("OR operator test:", 5 === 5 || false);
// Test whether an item is not in a array
const fruits = ["Pineapple", "Banana", "Apple"];
console.log('Test "Pineapple" in the array:', fruits.includes("pineapple"));
// test whether an item is not in an array
console.log('Testing "strawberry" is not in array:', !fruits.includes("strawberry"));
