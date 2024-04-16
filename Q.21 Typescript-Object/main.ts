// write a program that creates objects containing these items
// data type of person object
interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}
// object of person

let person = {

    age : 27 ,
    name : 'Tayyeba',
    nationality : 'Pakistan',
    student : true
}

// datatype of car object

interface car {
    maker : string,
    color : string,
    automatic : boolean
}

// print person
console.log(person);

// car object 
let car  = {
    maker : 'toyota',
    color : 'grey',
    automatic : true
}

// print car 
console.log(car);