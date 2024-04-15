// Exercise 19
// print a message indicating the number of people you are inviting to dinner.

let guestList: string[] = ['fatima','Iqra','Mehak'];

let absentGuest: string = 'Fatima';

let newGuest: string = 'Sonia';

guestList[0] = newGuest;

//for(let i=0; i<guestList.length; i++){
   // console.log(`Dear Mrs. ${guestList[i]}, \n\n It is our pleasure to invite you in our party\n\nThank You!\n\n`);
//}

//console.log(`Mrs.${absentGuest}. is not coming to the party!`);

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
// printing sorry message for guest

console.log('\n\n Sorry!\n\n We cannot arrange a big table only two people will be invited');

while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`sorry Mrs.${removeGuest}, you are not invited for dinner`);
}

for(let i=0; i<guestList.length; i++){
    console.log(`Dear Mrs.${guestList[i]},\n\n you are still invited.\n\n Thank you`);
}
// removing remained guest
guestList.splice(0,2);
console.log(guestList);
// Exercise 19
// print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest Are: ${guestList.length}`);