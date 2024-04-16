// write series of conditional tests
// creating car variable

let car : string = 'subaru';

// test no 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// test no 2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// test no 3
console.log("Is car.lower case == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

// test no 4 
console.log("Is car ! == 'Honda? I predict True.");
console.log(car! =='Honda');

// test no 5
console.log("Is car.Upper case == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
 
// test no 6 
console.log("is car == 'SUBARU' ? I predict False.");
console.log(car == 'SUBARU');

//test no 7
console.log("Is car === 'SUBARU? I predict False.");
console.log(car === 'SUBARU');

// test no 8
console.log("Is car =='Train? I predict False.");
console.log(car == 'Train');

// test no 9
console.log("Is car == 'Bus' ? I perdict False.");
console.log(car == 'Bus');

// test no 10
console.log("Is car == 'Cycle' ? I predict True.");
console.log(car == 'Cycle');
