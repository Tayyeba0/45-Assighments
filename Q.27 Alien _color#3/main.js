"use strict";
// turn your if-else chain from exercise 26-27 into an if else chain
let alienColor = 'green';
// version # 1
if (alienColor === 'green') {
    console.log('player earned 5 points!.');
}
else if (alienColor === 'yellow') {
    console.log('player earned 10 points!.');
}
else if (alienColor === 'red') {
    console.log('player earned 15 points!.');
}
else {
    console.log('please select right color');
}
// version # 2
alienColor = 'yellow';
if (alienColor === 'green') {
    console.log('player earned 5 points!.');
}
else if (alienColor === 'yellow') {
    console.log('player earned 10 points!.');
}
else if (alienColor === 'red') {
    console.log('player earned 15 points!.');
}
else {
    console.log('please select right color!.');
}
// version #3
alienColor = 'red';
if (alienColor === 'green') {
    console.log('player earned 5 points!.');
}
else if (alienColor === 'yellow') {
    console.log('player earned 10 points!.');
}
else if (alienColor === 'red') {
    console.log('player earned 15 points!.');
}
else {
    console.log('please select right color!.');
}
