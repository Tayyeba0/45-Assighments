"use strict";
// Modify the make shirt function
function makeShirt(size = 'Large', text = 'I love TypeScript.') {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
makeShirt();
makeShirt('Medium');
makeShirt('Small', 'I love Python');
