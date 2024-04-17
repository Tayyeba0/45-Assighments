"use strict";
// creating a variable called Alian color
let alienColor = 'green';
if (alienColor === 'green') {
    console.log('player earned just 5 points!');
}
alienColor = 'yellow';
// (the version that fails will have no output.)
if (alienColor === 'green') {
    console.log('player just earned 5 points!');
}
