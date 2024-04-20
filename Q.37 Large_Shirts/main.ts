// Modify the make shirt function

function makeShirt(size: string ='Large' , text: string = 'I love TypeScript.'){

    console.log(`Creating a ${size} shirt with the message: ${text}`);
}

makeShirt();

makeShirt('Medium');

makeShirt('Small','I love Python');