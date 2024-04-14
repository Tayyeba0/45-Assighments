"use strict";
// array of guests
let guestList = ['Fatima', 'Iqra', 'Mehak'];
// using for loop for accessing each element and printing them a invitation 
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mrs.   ${guestList[i]}   , \n\n It is our pleasure to invite you in our party.\n\n Thank you!\n\n`);
}
// absent guest 
let absentGuest = 'Fatima';
// new guest
let newGuest = 'Sonia';
// adding new guest in array 
guestList[0] = newGuest;
// using for loop
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mrs.   ${guestList[i]}   , \n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n`);
}
// informed about absent guest
console.log(`Mrs. ${absentGuest} , is not coming to the party!`);
