"use strict";
// write an if-else chain that determines a person's stages of life.
let age = 28;
// if the person is less than 2 years old print message person is a baby .
if (age < 2) {
    console.log('person is a baby.');
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
else if (age > 4 && age < 13) {
    console.log("person is a kid.");
}
else if (age > 13 && age < 20) {
    console.log("person is a teenager.");
}
else if (age > 20 && age < 65) {
    console.log("person is an adult.");
}
else {
    console.log("person is an elder.");
}
