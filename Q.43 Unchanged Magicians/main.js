"use strict";
// Q.43 unchanged magicians
let magician = ["Harry Potter", "Hermoione Granger", "Ron Weasley", "Albus Dumbledore"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianarray = copyArray(magician);
make_great(copyMagicianarray);
console.log("\n\n This is my origional array");
show_magicians(magician);
console.log("\n\n This is my modified array");
show_magicians(copyMagicianarray);
