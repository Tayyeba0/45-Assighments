// array of guest
let guestList: string[] = ['Fatima','Iqra', 'Mehak'];

let absentGuest: string = 'Fatima';

let newGuest: string = 'Sonia';

guestList[0] = newGuest;

for(let i=0; i<guestList.length; i++){
    console.log(`Dear Mrs. ${guestList[i]}, \n\n It is our pleasure to invite you in our party\n\nThank You!\n\n`);
}

console.log(`Mrs.${absentGuest}. is not coming to the party!`);

// printing good news

console.log("we find a big table so we invite three more guests.");

// adding guest in the start of array 
guestList.unshift('Hira');

// adding guest in the middle of array
guestList.splice(2,0,'Sobia');

// adding guest at the end of array
guestList.push('Sadia');

for(let i=0; i<guestList.length; i++){
    console.log(`Dear Mrs. ${guestList[i]}, \n\n It is our pleasure to invite you in our party\n\n Thank you!\n\n `);
}