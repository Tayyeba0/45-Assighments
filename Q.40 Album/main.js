"use strict";
// Q .42 Great Magician
let Magician = ["Harry potter", "Hermione Granger", "Ron  Weasely", "Albus Dumbledore"];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        Magician[i] = "The Great " + magicianarray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(Magician);
show_magicians(Magician);
