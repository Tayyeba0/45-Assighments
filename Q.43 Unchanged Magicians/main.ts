// Q.43 unchanged magicians

let magician : string[] = ["Harry Potter" , "Hermoione Granger" , "Ron Weasley", "Albus Dumbledore"];

function copyArray(arr:string[]){
    return [...arr]
}
function make_great (magicianArray:string[]){
    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] = "The Great " + magicianArray[i]
    }
}

function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
        
    });
}
const  copyMagicianarray = copyArray(magician);
make_great(copyMagicianarray);
console.log("\n\n This is my origional array");
show_magicians(magician);
console.log("\n\n This is my modified array");
show_magicians(copyMagicianarray);