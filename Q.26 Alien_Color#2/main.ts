// Alien Color 2
// choose a color for an alien as you did in exercise 25
let alienColor : string = 'green';
if(alienColor === 'green'){
    console.log('player earned 5 points for shooting the alien.');
}
else{
    console.log('player earned 10 points.');
}

// if the alien color is not green print a statement that the player just earned 10 points.
alienColor = 'yellow';

if(alienColor === 'green'){
    console.log('player earned 5 points for shooting the alien.')
    
}
else{
    console.log('player just earned 10 points.');
}